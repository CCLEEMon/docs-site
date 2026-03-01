import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function AboutPage(): React.ReactElement {
  return (
    <Layout title="关于我们" description="关于 CCLHUB">
      <main className="container margin-vert--lg">
        <Heading as="h1">关于 CCLHUB</Heading>

        <div className="row">
          <div className="col col--8 col--offset-2">
            <div style={{ marginTop: '2rem' }}>
              <h2>我们是谁</h2>
              <p>
                专注商业场景的 AI 提效工具。
              </p>

              <h2 style={{ marginTop: '2rem' }}>我们做什么</h2>
              <p>
                围绕商业工作流，持续开发 AI 工具和系统：
              </p>
              <ul>
                <li>电商工具箱（浏览器插件）</li>
                <li>AI 数据分析系统</li>
                <li>AI 客服系统</li>
              </ul>
              <p>
                降低重复劳动，提高工作效率和准确率。
              </p>

              <h2 style={{ marginTop: '2rem' }}>开发理念</h2>
              <p>
                基于真实需求迭代，持续更新升级。
              </p>

              <h2 style={{ marginTop: '2rem' }}>联系我们</h2>
              <ul>
                <li>产品文档：<a href="/docs">查看文档</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
