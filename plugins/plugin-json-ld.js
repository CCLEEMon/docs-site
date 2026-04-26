const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ============ 全局 Schema ============

// 区分站点：SITE=ai → 英文站 aidevhub.ai，否则中文站 aigent.ren
const isEn = process.env.SITE === 'ai';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CCLHUB",
  "url": isEn ? "https://aidevhub.ai" : "https://www.aigent.ren",
  "logo": isEn ? "https://aidevhub.ai/logo.png" : "https://www.aigent.ren/logo.png",
  "description": isEn
    ? "AI-powered e-commerce operations platform — AI automation + e-commerce tools, making operations more efficient"
    : "AI驱动的电商运营工具平台 — AI运营 + 电商工具箱，让电商运营更高效",
  "founder": {
    "@type": "Person",
    "name": "CCLEE"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CCLHUB",
  "url": isEn ? "https://aidevhub.ai" : "https://www.aigent.ren",
  "description": isEn
    ? "AI-powered e-commerce operations platform"
    : "AI驱动的电商运营工具平台",
  "publisher": {
    "@type": "Organization",
    "name": "CCLHUB",
    "logo": {
      "@type": "ImageObject",
      "url": isEn ? "https://aidevhub.ai/logo.png" : "https://www.aigent.ren/logo.png"
    }
  }
};

// ============ 页面级 Schema 生成器 ============

function buildArticleSchema({ title, description, url, date, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description || "",
    "url": url,
    "image": image || "https://www.aigent.ren/logo.png",
    "datePublished": date || new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Person",
      "name": "CCLEE"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CCLHUB",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aigent.ren/logo.png"
      }
    }
  };
}

function buildHowToSchema({ title, description, url, steps }) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description || "",
    "url": url,
    "step": (steps || []).map((step, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": step.name || `步骤 ${i + 1}`,
      "text": step.text || step
    }))
  };
}

function buildFAQSchema({ title, description, url, faqs }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": title,
    "description": description || "",
    "url": url,
    "mainEntity": (faqs || []).map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

// ============ Docusaurus 插件 ============

module.exports = function pluginJsonLd() {
  const pageSchemaMap = {};

  // 扫描目录并提取 Schema
  function scanDirectory(dir, urlPrefix) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

    for (const file of files) {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data: frontmatter } = matter(content);

      if (!frontmatter.schema) continue;

      // 从文件名提取 slug（去掉日期前缀）
      let slug = frontmatter.slug || file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx?$/, '');
      const url = `https://www.aigent.ren${urlPrefix}${slug}`;

      const base = {
        title: frontmatter.title || slug,
        description: frontmatter.description || "",
        url,
        date: frontmatter.date,
        image: frontmatter.image,
      };

      let schema = null;

      switch (frontmatter.schema) {
        case 'Article':
          schema = buildArticleSchema(base);
          break;
        case 'HowTo':
          schema = buildHowToSchema({ ...base, steps: frontmatter.steps || [] });
          break;
        case 'FAQPage':
          schema = buildFAQSchema({ ...base, faqs: frontmatter.faqs || [] });
          break;
      }

      if (schema) {
        pageSchemaMap[`${urlPrefix}${slug}`] = schema;
      }
    }
  }

  return {
    name: 'plugin-json-ld',

    // 构建时扫描 docs + blog + cases-blog 目录
    async loadContent() {
      // docs 目录
      const docsDir = path.resolve(__dirname, '..', 'docs');
      scanDirectory(docsDir, '/docs/');

      // blog 目录（中文）
      const blogDir = path.resolve(__dirname, '..', 'blog');
      scanDirectory(blogDir, '/blog/');

      // cases-blog 目录（案例）
      const casesDir = path.resolve(__dirname, '..', 'cases-blog');
      scanDirectory(casesDir, '/cases/');
    },

    // 全局注入 Organization + WebSite
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: { type: 'application/ld+json' },
            innerHTML: JSON.stringify(organizationSchema),
          },
          {
            tagName: 'script',
            attributes: { type: 'application/ld+json' },
            innerHTML: JSON.stringify(websiteSchema),
          },
        ],
      };
    },

    // 页面级 Schema 注入 + hreflang 跨域互指
    async postBuild({ outDir }) {
      const cheerio = require('cheerio');

      // hreflang 配置
      const zhDomain = 'https://www.aigent.ren';
      const enDomain = 'https://aidevhub.ai';

      // 从 outDir 路径提取页面的路径部分
      // outDir 形如 build/ai 或 build/ren
      function getPagePath(htmlPath, outDir) {
        const relative = path.relative(outDir, htmlPath);
        const normalized = '/' + relative.replace(/\\/g, '/').replace(/\/index\.html$/, '');
        return normalized === '/index' ? '/' : normalized;
      }

      function injectHreflang($head, pagePath) {
        const zhHref = `${zhDomain}${pagePath}`;
        const enHref = `${enDomain}${pagePath}`;

        // zh-CN → aigent.ren，en-US + x-default → aidevhub.ai
        const tags = [
          { lang: 'zh-CN', href: zhHref },
          { lang: 'en-US', href: enHref },
          { lang: 'x-default', href: enHref },
        ];

        tags.forEach(({ lang, href }) => {
          $head.append(`<link rel="hreflang" hreflang="${lang}" href="${href}">`);
        });
      }

      // 注入页面级 JSON-LD Schema
      for (const [urlPath, schema] of Object.entries(pageSchemaMap)) {
        const htmlPath = path.join(outDir, urlPath, 'index.html');
        if (!fs.existsSync(htmlPath)) continue;

        const html = fs.readFileSync(htmlPath, 'utf-8');
        const $ = cheerio.load(html);

        $('head').append(
          `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
        );

        fs.writeFileSync(htmlPath, $.html());
      }

      // hreflang：遍历 outDir 下所有 index.html
      const walkDir = (dir) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            // 跳过 __docusaurus 等内部目录
            if (!entry.name.startsWith('__')) {
              walkDir(fullPath);
            }
          } else if (entry.name === 'index.html') {
            const html = fs.readFileSync(fullPath, 'utf-8');
            const $ = cheerio.load(html);
            const pagePath = getPagePath(fullPath, outDir);
            injectHreflang($('head'), pagePath);
            fs.writeFileSync(fullPath, $.html());
          }
        }
      };

      walkDir(outDir);
    },
  };
};
