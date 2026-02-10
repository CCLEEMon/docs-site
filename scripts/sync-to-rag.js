#!/usr/bin/env node

/**
 * docs → RAG 知识库同步脚本
 * 
 * 用法：
 *   node scripts/sync-to-rag.js              # 正常同步
 *   node scripts/sync-to-rag.js --dry-run    # 预览变更，不执行
 * 
 * 依赖：npm install gray-matter
 * 
 * 在 package.json 中添加：
 *   "sync-rag": "node scripts/sync-to-rag.js"
 *   "sync-rag:dry": "node scripts/sync-to-rag.js --dry-run"
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const matter = require('gray-matter');

// ============ 配置 ============

const CONFIG = {
  docsDir: path.resolve(__dirname, '..', 'docs'),
  hashFile: path.resolve(__dirname, '..', '.rag-sync-hashes.json'),
  ragBaseUrl: process.env.RAG_URL || 'http://localhost:3003',
  collection: process.env.RAG_COLLECTION || 'product_help',
  dryRun: process.argv.includes('--dry-run'),
};

// ============ Markdown 分块 ============

function splitByHeadings(content) {
  const lines = content.split('\n');
  const chunks = [];
  let currentHeading = '';
  let currentLines = [];

  for (const line of lines) {
    const headingMatch = line.match(/^(#{2,3})\s+(.+)/);
    if (headingMatch) {
      // 保存上一个 chunk
      if (currentLines.length > 0) {
        const text = currentLines.join('\n').trim();
        if (text) chunks.push({ heading: currentHeading, text });
      }
      currentHeading = headingMatch[2].trim();
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }

  // 最后一个 chunk
  if (currentLines.length > 0) {
    const text = currentLines.join('\n').trim();
    if (text) chunks.push({ heading: currentHeading, text });
  }

  return chunks;
}

// ============ Hash 管理 ============

function loadHashes() {
  if (fs.existsSync(CONFIG.hashFile)) {
    return JSON.parse(fs.readFileSync(CONFIG.hashFile, 'utf-8'));
  }
  return {};
}

function saveHashes(hashes) {
  fs.writeFileSync(CONFIG.hashFile, JSON.stringify(hashes, null, 2));
}

function computeHash(content) {
  return crypto.createHash('md5').update(content).digest('hex').slice(0, 12);
}

// ============ RAG API 调用 ============

async function ragDelete(docId) {
  const res = await fetch(`${CONFIG.ragBaseUrl}/delete`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ collection: CONFIG.collection, doc_id: docId }),
  });
  if (!res.ok) throw new Error(`DELETE ${docId} failed: ${res.status}`);
}

async function ragIndex(documents, metadatas) {
  const res = await fetch(`${CONFIG.ragBaseUrl}/index`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      collection: CONFIG.collection,
      documents,
      metadatas,
    }),
  });
  if (!res.ok) throw new Error(`INDEX failed: ${res.status}`);
}

// ============ 主流程 ============

async function main() {
  console.log(CONFIG.dryRun ? '🔍 DRY RUN 模式\n' : '🚀 开始同步\n');

  const oldHashes = loadHashes();
  const newHashes = {};

  // 扫描 docs 目录
  const files = fs.readdirSync(CONFIG.docsDir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

  let added = 0, updated = 0, deleted = 0, skipped = 0;

  for (const file of files) {
    const filePath = path.join(CONFIG.docsDir, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data: fm, content } = matter(raw);

    const docId = `docs/${file.replace(/\.mdx?$/, '')}`;

    // rag: false 或未声明 → 跳过（如果之前同步过则删除）
    if (!fm.rag) {
      if (oldHashes[docId]) {
        console.log(`🗑  删除 (rag:false): ${docId}`);
        if (!CONFIG.dryRun) await ragDelete(docId);
        deleted++;
      }
      continue;
    }

    const hash = computeHash(raw);
    newHashes[docId] = hash;

    // 无变更 → 跳过
    if (oldHashes[docId] === hash) {
      skipped++;
      continue;
    }

    // 分块
    const chunks = splitByHeadings(content);
    if (chunks.length === 0) {
      skipped++;
      continue;
    }

    const documents = chunks.map(c =>
      c.heading ? `## ${c.heading}\n\n${c.text}` : c.text
    );

    const metadatas = chunks.map(c => ({
      doc_id: docId,
      source: file,
      title: fm.title || file,
      section: c.heading || '概述',
      tags: (fm.rag_tags || []).join(','),
    }));

    const action = oldHashes[docId] ? '更新' : '新增';
    console.log(`${action === '新增' ? '➕' : '🔄'}  ${action}: ${docId} (${chunks.length} chunks)`);

    if (!CONFIG.dryRun) {
      // 先删后增
      if (oldHashes[docId]) await ragDelete(docId);
      await ragIndex(documents, metadatas);
    }

    action === '新增' ? added++ : updated++;
  }

  // 清理已删除的文件
  for (const docId of Object.keys(oldHashes)) {
    if (!newHashes[docId] && !files.some(f => `docs/${f.replace(/\.mdx?$/, '')}` === docId && matter(fs.readFileSync(path.join(CONFIG.docsDir, f), 'utf-8')).data.rag === false)) {
      // 文件已不存在
      const exists = files.some(f => `docs/${f.replace(/\.mdx?$/, '')}` === docId);
      if (!exists) {
        console.log(`🗑  删除 (文件已移除): ${docId}`);
        if (!CONFIG.dryRun) await ragDelete(docId);
        deleted++;
      }
    }
  }

  // 保存 hash
  if (!CONFIG.dryRun) saveHashes(newHashes);

  console.log(`\n✅ 完成: 新增 ${added}, 更新 ${updated}, 删除 ${deleted}, 跳过 ${skipped}`);
}

main().catch(err => {
  console.error('❌ 同步失败:', err.message);
  process.exit(1);
});
