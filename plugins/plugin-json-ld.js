const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const siteUrl = 'https://aidevhub.ai';

// ============ 全局 Schema ============

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CCLHUB",
  "url": "https://aidevhub.ai",
  "logo": "https://aidevhub.ai/logo.png",
  "description": "AI-powered e-commerce operations platform — AI automation + e-commerce tools, making operations more efficient",
  "founder": {
    "@type": "Person",
    "name": "CCLEE"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CCLHUB",
  "url": "https://aidevhub.ai",
  "description": "AI-powered e-commerce operations platform",
  "publisher": {
    "@type": "Organization",
    "name": "CCLHUB",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aidevhub.ai/logo.png"
    }
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "CCLEE",
  "url": "https://aidevhub.ai",
  "jobTitle": "AI Tool Developer & E-commerce Consultant",
  "description": "Independent developer with 24 years of e-commerce experience, specializing in building AI-powered tools and systems grounded in real business needs — not technology for its own sake.",
  "knowsAbout": [
    "FastAPI",
    "RAG Systems",
    "AI Agent Development",
    "1688 B2B Sourcing",
    "React",
    "China Market Entry"
  ],
  "sameAs": [
    "https://www.upwork.com/freelancers/~010ab5ec29d8f4ff3f",
    "https://github.com/cclee-hub",
    "https://www.aigent.ren"
  ]
};

// ============ 页面级 Schema 生成器 ============

function buildArticleSchema({ title, description, url, date, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description || "",
    "url": url,
    "image": image || `${siteUrl}/logo.png`,
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
        "url": `${siteUrl}/logo.png`
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
      const url = `${siteUrl}${urlPrefix}${slug}`;

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
      const docsDir = path.resolve(__dirname, '..', 'docs');
      scanDirectory(docsDir, '/docs/');

      const blogDir = path.resolve(__dirname, '..', 'blog');
      scanDirectory(blogDir, '/blog/');

      const casesDir = path.resolve(__dirname, '..', 'cases-blog');
      scanDirectory(casesDir, '/cases/');
    },

    // 全局注入 Organization + WebSite + Person
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
          {
            tagName: 'script',
            attributes: { type: 'application/ld+json' },
            innerHTML: JSON.stringify(personSchema),
          },
        ],
      };
    },

    // 页面级 Schema 注入 + hreflang（同域 /zh/ 互指）
    async postBuild({ outDir }) {
      const cheerio = require('cheerio');

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

      // hreflang 由 Docusaurus 内置 i18n 自动处理，无需插件注入
    },
  };
};
