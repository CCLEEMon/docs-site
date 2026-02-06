import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', 'a36'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', '5d6'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', '1b1'),
            routes: [
              {
                path: '/en/docs/ai-analytics',
                component: ComponentCreator('/en/docs/ai-analytics', 'a9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/browser-plugin',
                component: ComponentCreator('/en/docs/browser-plugin', 'c2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/customer-service',
                component: ComponentCreator('/en/docs/customer-service', '6c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/guide',
                component: ComponentCreator('/en/docs/guide', 'f4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/intro',
                component: ComponentCreator('/en/docs/intro', 'b09'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', '6c2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
