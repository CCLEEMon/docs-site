import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function PrivacyPage(): JSX.Element {
  return (
    <Layout title="隐私政策" description="CCLHUB 隐私政策">
      <main className="container margin-vert--lg">
        <Heading as="h1">隐私政策</Heading>

        <div className="row">
          <div className="col col--8 col--offset-2">
            <div style={{ marginTop: '2rem' }}>
              <p>
                本网站为开源项目，遵循 MIT 协议。我们不会收集、存储或传输任何访问者的个人信息。
              </p>

              <h2 style={{ marginTop: '2rem' }}>本地运行</h2>
              <p>
                本网站代码完全开源，您可以自行托管和部署。所有数据处理仅在您的浏览器本地进行。
              </p>

              <h2 style={{ marginTop: '2rem' }}>第三方服务</h2>
              <p>
                本网站不使用任何数据分析、广告或追踪服务。
              </p>

              <h2 style={{ marginTop: '2rem' }}>开源代码</h2>
              <p>
                您可以在 GitHub 上查看完整的源代码，了解网站的工作原理。
              </p>

              <div style={{ marginTop: '3rem', padding: '1rem', backgroundColor: 'var(--ifm-color-emphasis-100)', borderRadius: '8px' }}>
                <p style={{ margin: 0, fontSize: '0.9em', color: 'var(--ifm-color-emphasis-600)' }}>
                  <strong>最后更新：</strong> {new Date().getFullYear()}年{new Date().getMonth() + 1}月{new Date().getDate()}日
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
