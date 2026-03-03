import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CC.L',
  tagline: 'AI驱动的电商运营工具平台',
  favicon: 'img/favicon.ico',

  url: 'https://www.aigent.ren',
  baseUrl: '/',

  // Umami 网站分析
  scripts: [
    {
      src: 'https://umami.aigent.ren/script.js',
      async: true,
      'data-website-id': '21f40cb0-d661-4bc6-8d50-d3606aaf006c',
    },
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
    experimental_faster: true,
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh',
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
        blogListComponent: '@theme/BlogListPage',
        blogPostComponent: '@theme/BlogPostPage',
        tagsBasePath: 'cases-tags',
        archiveBasePath: null, // 禁用归档
        authorsMapPath: 'authors.yaml',
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

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'CC.L Logo',
        src: 'logo.png',
      },
      items: [
        { to: '/', label: '首页', position: 'left' },
        { to: '/services', label: '服务', position: 'left' },
        { to: '/products', label: '产品', position: 'left' },
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
    },
    // 允许前端连接到 RAG API
    metadata: [
      { charSet: 'utf-8' },
      {
        'http-equiv': 'Content-Security-Policy',
        content: "default-src 'self' 'unsafe-inline'; connect-src 'self' https://rag.aigent.ren https://umami.aigent.ren; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://umami.aigent.ren; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.aigent.ren https://oss-cn-shenzhen.aliyuncs.com; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests; block-all-mixed-content; reflected-xss: block; referrer no-referrer",
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
