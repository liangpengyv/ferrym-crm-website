/**
 * 由于从 Vue CLI 3 起，不再使用传统的 webpack 配置文件，故 WebStorm 无法识别别名
 * 本文件对项目无任何作用，仅作为 WebStorm 识别别名用
 * 进入 WebStorm preferences -> Language & Framework -> JavaScript -> Webpack，选择这个文件即可
 */
const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'config': resolve('src/config'),
      'model': resolve('src/model'),
      'router': resolve('src/router'),
      'service': resolve('src/service'),
      'store': resolve('src/store'),
      'vendor': resolve('src/vendor'),
      'views': resolve('src/views'),
    },
  },
}
