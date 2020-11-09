const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  lintOnSave: true,
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 8080,
    disableHostCheck: false,
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('config', resolve('src/config'))
      .set('model', resolve('src/model'))
      .set('router', resolve('src/router'))
      .set('service', resolve('src/service'))
      .set('store', resolve('src/store'))
      .set('vendor', resolve('src/vendor'))
      .set('views', resolve('src/views'))
  }
}
