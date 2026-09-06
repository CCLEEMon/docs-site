import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// 点击 .markdown 内图片弹出居中放大层；路由切换后重新绑定新页图片，旧实例先 detach 防重复绑定
let zoom = null;

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) return null;
  return {
    onRouteDidUpdate() {
      if (zoom) zoom.detach();
      // eslint-disable-next-line global-require
      const mediumZoom = require('medium-zoom').default;
      zoom = mediumZoom('.markdown img', { background: 'rgba(0, 0, 0, 0.75)', margin: 24 });
    },
  };
})();
