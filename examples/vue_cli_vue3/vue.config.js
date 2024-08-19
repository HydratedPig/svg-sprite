const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()

    config.module.rule('svg2')
      .test(/\.(svg)(\?.*)?$/).use('@svg-sprite/webpack-vue-loader').loader('@svg-sprite/webpack-vue-loader')
  },
})
