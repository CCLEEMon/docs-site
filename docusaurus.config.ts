import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CCLHUB',
  tagline: 'AI驱动的电商运营工具平台',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
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
        src: 'img/logo.svg',
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
          title: '资源',
          items: [
            { label: '用户指南', to: '/docs/guide' },
            { label: '关于我们', to: 'https://cclhub.com' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: 'GitHub', to: 'https://github.com/cclhub' },
            { label: '联系我们', to: 'mailto:contact@cclhub.com' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} CCLHUB. All rights reserved.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
