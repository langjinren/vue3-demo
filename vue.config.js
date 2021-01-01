const path = require('path')
const vantTheme = path.resolve(__dirname, "./src/assets/css/theme.less")

module.exports = {
  publicPath: "./",
  outputDir: "docs",
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      // less: {
      //   lessOptions: {
      //     modifyVars: {
      //       hack: `true; @import "${vantTheme};"`
      //     }
      //   }
      // }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  devServer: {
    port: 8010
  }
}