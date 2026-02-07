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
  },

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
        { type: 'doc', docId: 'guide', label: '用户指南', position: 'left' },
        { type: 'doc', docId: 'ai-analytics', label: 'AI分析', position: 'left' },
        { type: 'doc', docId: 'browser-plugin', label: '浏览器插件', position: 'left' },
        { type: 'doc', docId: 'customer-service', label: 'AI客服', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '产品',
          items: [
            { label: 'AI数据分析', to: '/docs/ai-analytics' },
            { label: '浏览器插件', to: '/docs/browser-plugin' },
            { label: 'AI客服', to: '/docs/customer-service' },
          ],
        },
        {
          title: '联系',
          items: [
            { label: '邮箱', to: 'mailto:leecc1531@gmail.com' },
            { label: '微信/手机', to: 'tel:13005531531' },
          ],
        },
      ],
      copyright: `© 2026 caichen.lee. All rights reserved.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
