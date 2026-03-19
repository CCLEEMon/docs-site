import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CCLEE',
  tagline: 'AI驱动的电商运营工具平台',
  favicon: 'img/favicon.ico',

  url: process.env.SITE === 'ai' ? 'https://aidevhub.ai' : 'https://www.aigent.ren',
  baseUrl: '/',

  // Umami 网站分析
  scripts: [
    {
      src: 'https://umami.aigent.ren/script.js',
      async: true,
      'data-website-id': process.env.SITE === 'ai'
        ? '806b27c0-695b-4e07-8b75-89a6b4aefc95'
        : '21f40cb0-d661-4bc6-8d50-d3606aaf006c',
    },
  ],

  // JSON-LD Person Schema（英文版 aidevhub.ai / 中文版 aigent.ren）
  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify(process.env.SITE === 'ai' ? {
        // 英文版
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
      } : {
        // 中文版
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "CCLEE",
        "url": "https://www.aigent.ren",
        "jobTitle": "AI系统开发者 & 电商战略顾问",
        "description": "拥有24年电商行业实战经验的独立开发者，专注将AI能力落地于真实商业场景，围绕业务需求开发实用工具与系统，拒绝脱离实际的技术堆砌。",
        "knowsAbout": [
          "AI工具开发",
          "RAG知识库系统",
          "AI Agent开发",
          "1688全渠道运营",
          "中国跨境电商",
          "企业AI增效落地"
        ],
        "sameAs": [
          "https://www.upwork.com/freelancers/~010ab5ec29d8f4ff3f",
          "https://github.com/cclee-hub",
          "https://aidevhub.ai"
        ]
      })
    }
  ],

  // 静态资源目录，drafts/ 不在此列表中，不参与构建和发布
  staticDirectories: ['static'],

  organizationName: 'CCLHUB',
  projectName: 'docs-site',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // Node 24 兼容性：使用 SWC 替代 Terser
  future: {
    v4: true,
    experimental_faster: process.env.SITE !== 'ai',
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: process.env.SITE === 'ai' ? 'en' : 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
        label: '简体中文',
        htmlLang: 'zh-CN',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  plugins: [
    './plugins/plugin-json-ld',
    // 技术博客
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog',
        path: 'blog',
        routeBasePath: 'blog',
        blogSidebarCount: 'ALL',
      },
    ],
    // 案例博客
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'cases-blog',
        path: 'cases-blog',
        routeBasePath: 'cases',
        blogTitle: '项目案例',
        blogDescription: '真实交付案例，覆盖AI工具开发、本地化策略、电商运营',
        postsPerPage: 10,
        blogListComponent: '@theme/BlogListPageForCases',
        blogPostComponent: '@theme/BlogPostPage',
        tagsBasePath: 'cases-tags',
        archiveBasePath: null, // 禁用归档
        authorsMapPath: '../blog/authors.yml',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'CCLEE Logo',
        src: 'logo.png',
      },
      items: [
        { to: '/', label: '首页', position: 'left' },
        { to: '/services', label: '服务', position: 'left' },
        { to: '/products', label: '产品', position: 'left' },
        { to: '/tool', label: 'AI 工具', position: 'left' },
        { to: '/cases', label: '案例', position: 'left' },
        { to: '/about', label: '关于', position: 'left' },
        { to: '/blog', label: '博客', position: 'left' },
        {
          to: '/about',
          label: '合作咨询',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '网址',
          items: [
            { label: '首页', to: '/' },
            { label: '服务', to: '/services' },
            { label: '产品', to: '/products' },
            { label: 'AI 工具', to: '/tool' },
            { label: '案例', to: '/cases' },
            { label: '关于', to: '/about' },
          ],
        },
      ],
    },
    // 允许前端连接到 RAG API
    metadata: [
      { charSet: 'utf-8' },
      {
        'http-equiv': 'Content-Security-Policy',
        content: "default-src 'self' 'unsafe-inline'; connect-src 'self' https://rag.aigent.ren https://umami.aigent.ren; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://umami.aigent.ren; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.aigent.ren https://oss-cn-shenzhen.aliyuncs.com; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests; block-all-mixed-content",
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
