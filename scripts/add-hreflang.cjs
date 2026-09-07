/**
 * 构建后处理：注入跨域 hreflang（中文站 ccleeai.com ↔ 英文站 aidevhub.ai）
 *
 * 规则（两站同仓库同路由，docs 除外）：
 *   - 互指范围：/、/blog/*、/cases/*、src/pages 平铺路由（about/services 等）
 *   - /docs/* 两边 slug 不同（无映射表），暂不互指
 *   - 404.html 不处理
 *   - 每页注入 3 行：zh-CN→ccleeai.com、en-US→aidevhub.ai、x-default→aidevhub.ai
 *     （注入前先移除 Docusaurus 自带的自指 hreflang 声明，避免 x-default 冲突）
 *
 * 用法：SITE=zh|en node scripts/add-hreflang.cjs（由 package.json 的 build* 命令自动链式调用）
 */
const fs = require('fs');
const path = require('path');

const SITE = process.env.SITE === 'zh' ? 'zh' : 'en';
const SELF = SITE === 'zh' ? 'https://ccleeai.com' : 'https://aidevhub.ai';
const ZH = 'https://ccleeai.com';
const EN = 'https://aidevhub.ai';

const root = path.resolve(__dirname, '..');
const buildDir = path.join(root, 'build');

if (!fs.existsSync(buildDir)) {
  console.error('[add-hreflang] build/ 不存在，跳过');
  process.exit(0);
}

// src/pages 共享路由（两站同源，Docusaurus 文件路由：index.tsx → /，about.tsx → /about）
function pagesRoutes() {
  const dir = path.join(root, 'src', 'pages');
  const routes = new Set();
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.name.startsWith('_')) continue;
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|jsx|ts|js|md|mdx)$/.test(e.name)) {
        let rel = path.relative(dir, p).replace(/\\/g, '/').replace(/\.(tsx|jsx|ts|js|md|mdx)$/, '');
        if (rel === 'index') rel = '';
        routes.add('/' + rel);
      }
    }
  })(dir);
  return routes;
}
const allowedPages = pagesRoutes();

function norm(p) {
  // 归一化尾斜杠用于路由比对
  return p === '/' ? '/' : p.replace(/\/+$/, '');
}

function allowed(p) {
  const n = norm(p);
  if (n === '/') return true;
  if (n === '/blog' || n.startsWith('/blog/')) return true;
  if (n === '/cases' || n.startsWith('/cases/')) return true;
  if (n === '/docs' || n.startsWith('/docs/')) return false; // 两边 slug 不同，待映射表
  return allowedPages.has(n);
}

// build/xxx/index.html → /xxx/；404.html → null
function pathOf(f) {
  let rel = path.relative(buildDir, f).replace(/\\/g, '/');
  if (rel === '404.html') return null;
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  if (rel.endsWith('.html')) return '/' + rel.slice(0, -'.html'.length) + '/';
  return null;
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

let injected = 0;
let skipped = 0;
for (const f of walk(buildDir)) {
  const p = pathOf(f);
  if (!p || !allowed(p)) {
    skipped++;
    continue;
  }
  let html = fs.readFileSync(f, 'utf8');
  if (!html.includes('</head>')) {
    skipped++;
    continue;
  }
  // 移除 Docusaurus 自带的自指 hreflang（含 data-rh 变体），保留 RSS 等 type=alternate 不受影响（无 hreflang 属性）
  html = html.replace(/<link\b[^>]*hreflang=[^>]*>\s*/gi, '');
  const tags =
    `<link rel="alternate" hreflang="zh-CN" href="${ZH}${p}"/>` +
    `<link rel="alternate" hreflang="en-US" href="${EN}${p}"/>` +
    `<link rel="alternate" hreflang="x-default" href="${EN}${p}"/>`;
  html = html.replace('</head>', tags + '</head>');
  fs.writeFileSync(f, html);
  injected++;
}
console.log(`[add-hreflang] SITE=${SITE} 注入 ${injected} 页，跳过 ${skipped} 页（docs/404 等）`);
