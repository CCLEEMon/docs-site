import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CCLHUB',
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
      title: 'CCLHUB',
      logo: {
        alt: 'CCLHUB Logo',
        src: 'logo.png',
      },
      items: [
        { type: 'doc', docId: 'ai-analytics', label: 'AI分析', position: 'left' },
        { type: 'doc', docId: 'browser-plugin', label: '浏览器插件', position: 'left' },
        { type: 'doc', docId: 'customer-service', label: 'AI客服', position: 'left' },
        { to: '/blog', label: '技术博客', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
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
