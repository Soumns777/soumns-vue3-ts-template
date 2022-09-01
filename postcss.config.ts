// postcss.config.js
module.exports = {
  plugins: {
    // 使用postcss-px-to-viewport-8-plugin进行优化postcss-px-to-viewport提示的报错,效果一致
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375,
    },
  },
};
