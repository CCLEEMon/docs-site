import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'AI运营',
      items: ['ai-analytics', 'ai-analytics-updates'],
    },
    {
      type: 'category',
      label: '浏览器插件',
      items: ['browser-plugin', 'browser-plugin-updates'],
    },
    {
      type: 'category',
      label: 'AI客服',
      items: ['customer-service', 'ai-customer-service-updates'],
    },
  ],
};

export default sidebars;
