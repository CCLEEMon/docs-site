const path = require('path');

// 全站正文图片点击放大（medium-zoom）；客户端逻辑见 clientModule.js
module.exports = function imageZoomTheme() {
  return {
    name: 'theme-image-zoom',
    getClientModules() {
      return [path.resolve(__dirname, 'clientModule.js')];
    },
  };
};
