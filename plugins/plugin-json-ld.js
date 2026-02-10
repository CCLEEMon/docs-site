const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ============ 全局 Schema ============

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CCLHUB",
  "url": "https://www.aigent.ren",
  "logo": "https://www.aigent.ren/logo.png",
  "description": "AI驱动的电商运营工具平台 — AI运营 + 电商工具箱，让电商运营更高效",
  "founder": {
    "@type": "Person",
    "name": "caichen.lee"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CCLHUB",
  "url": "https://www.aigent.ren",
  "description": "AI驱动的电商运营工具平台",
  "publisher": {
    "@type": "Organization",
    "name": "CCLHUB",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.aigent.ren/logo.png"
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
      "name": "caichen.lee"
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

function buildFAQSchema({ title, url, faqs }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": title,
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

  return {
    name: 'plugin-json-ld',

    // 构建时扫描 docs 目录，读取 frontmatter
    async loadContent() {
      const docsDir = path.resolve(__dirname, '..', 'docs');
      if (!fs.existsSync(docsDir)) return;

      const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

      for (const file of files) {
        const filePath = path.join(docsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data: frontmatter } = matter(content);

        if (!frontmatter.schema) continue;

        const slug = frontmatter.slug || file.replace(/\.mdx?$/, '');
        const url = `https://www.aigent.ren/docs/${slug}`;

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
          pageSchemaMap[`/docs/${slug}`] = schema;
        }
      }
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

    // 页面级 Schema 注入到构建输出的 HTML
    async postBuild({ outDir }) {
      const cheerio = require('cheerio');

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
    },
  };
};
