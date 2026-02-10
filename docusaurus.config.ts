import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CCLHUB',
  tagline: 'AI驱动的电商运营工具平台',
  favicon: 'img/favicon.ico',

  url: 'https://www.aigent.ren',
  baseUrl: '/',

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
    // 开发者文档实例
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developers',
        path: 'developers',
        routeBasePath: 'developers',
        sidebarPath: './sidebarsDevelopers.ts',
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
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
