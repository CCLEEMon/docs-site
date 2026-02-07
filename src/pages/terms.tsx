import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function TermsPage(): JSX.Element {
  return (
    <Layout title="服务条款" description="CCLHUB 服务条款">
      <main className="container margin-vert--lg">
        <Heading as="h1">服务条款</Heading>

        <div className="row">
          <div className="col col--8 col--offset-2">
            <div style={{ marginTop: '2rem' }}>
              <h2>开源协议</h2>
              <p>
                本网站遵循 <strong>MIT 开源协议</strong>。
              </p>
              <ul>
                <li>✅ 允许商业使用</li>
                <li>✅ 允许修改</li>
                <li>✅ 允许分发</li>
                <li>✅ 允许私用</li>
              </ul>
              <p>
                <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
                  查看完整协议 →
                </a>
              </p>

              <h2 style={{ marginTop: '2rem' }}>免责声明</h2>
              <p>
                本网站按"原样"提供，不提供任何形式保证。使用本网站代码造成的任何损失，开发者不承担责任。
              </p>

              <h2 style={{ marginTop: '2rem' }}>使用须知</h2>
              <p>
                访问和使用本网站即表示您同意：
              </p>
              <ul>
                <li>遵守当地法律法规</li>
                <li>不将本网站用于非法用途</li>
                <li>自行承担使用风险</li>
              </ul>

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
