import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e8e'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '251'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '35b'),
            routes: [
              {
                path: '/docs/ai-analytics',
                component: ComponentCreator('/docs/ai-analytics', '8ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/browser-plugin',
                component: ComponentCreator('/docs/browser-plugin', 'add'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/customer-service',
                component: ComponentCreator('/docs/customer-service', 'd89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guide',
                component: ComponentCreator('/docs/guide', 'c42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '853'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
