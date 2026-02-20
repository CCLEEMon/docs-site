#!/usr/bin/env node

/**
 * docs → RAG 知识库同步脚本
 *
 * 用法：
 *   node scripts/sync-to-rag.js              # 正常同步
 *   node scripts/sync-to-rag.js --dry-run    # 预览变更，不执行
 *
 * 依赖：npm install gray-matter dotenv
 *
 * 在 package.json 中添加：
 *   "sync-rag": "node scripts/sync-to-rag.js"
 *   "sync-rag:dry": "node scripts/sync-to-rag.js --dry-run"
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const matter = require('gray-matter');

// 加载环境变量
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env.local') });

// ============ 配置 ============

const CONFIG = {
  docsDir: path.resolve(__dirname, '..', 'docs'),
  hashFile: path.resolve(__dirname, '..', '.rag-sync-hashes.json'),
  ragBaseUrl: process.env.RAG_URL || 'http://localhost:3003',
  collection: process.env.RAG_COLLECTION || 'product_help',
  apiKey: process.env.RAG_API_KEY || '',
  dryRun: process.argv.includes('--dry-run'),
};

// ============ Markdown 分块 ============
// 对齐 rag-service: 固定 500 token/块 (约750字), 重叠 50 token

function splitByTokens(content) {
  const CHUNK_SIZE = 750;  // 约 500 token
  const OVERLAP = 75;      // 约 50 token

  const chunks = [];
  let pos = 0;

  while (pos < content.length) {
    const end = Math.min(pos + CHUNK_SIZE, content.length);

    // 尝试在句子边界切分
    let splitPos = end;
    if (end < content.length) {
      // 寻找最近的句子结束符
      const sentenceEnd = content.lastIndexOf('\n', end);
      if (sentenceEnd > pos + CHUNK_SIZE / 2) {
        splitPos = sentenceEnd + 1;
      }
    }

    chunks.push(content.slice(pos, splitPos).trim());
    pos = splitPos - OVERLAP;
  }

  return chunks.filter(c => c.length > 0);
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
  const url = `${CONFIG.ragBaseUrl}/documents?collection=${CONFIG.collection}&doc_id=${docId}`;
  const res = await fetch(url, {
    method: 'DELETE',
    headers: { 'X-API-Key': CONFIG.apiKey },
  });
  if (!res.ok) throw new Error(`DELETE ${docId} failed: ${res.status}`);
}

async function ragIndex(documents, metadatas) {
  const res = await fetch(`${CONFIG.ragBaseUrl}/index`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      collection: CONFIG.collection,
      documents: documents,
      metadatas: metadatas,
      api_key: CONFIG.apiKey,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`INDEX failed: ${res.status} - ${err}`);
  }
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
    const chunks = splitByTokens(content);
    if (chunks.length === 0) {
      skipped++;
      continue;
    }

    const documents = chunks;

    const metadatas = chunks.map((_, i) => ({
      doc_id: docId,
      source: file,
      title: fm.title || file,
      section: `chunk_${i}`,
      tags: (fm.rag_tags || []).join(','),
      project: fm.project || 'general',
    }));

    const action = oldHashes[docId] ? '更新' : '新增';
    console.log(`${action === '新增' ? '➕' : '🔄'}  ${action}: ${docId} (${chunks.length} chunks)`);

    if (!CONFIG.dryRun) {
      // 调试日志
      console.log(`  [DEBUG] documents: ${documents.length}, metadatas: ${metadatas.length}`);
      console.log(`  [DEBUG] first metadata:`, JSON.stringify(metadatas[0]));

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
