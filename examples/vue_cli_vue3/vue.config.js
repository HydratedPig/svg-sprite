const { webpackPlugin, spriteResourceFilter } = require('@svg-sprite/vue')
const { defineConfig } = require('@vue/cli-service')

const svgSpriteOptions = {
}

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      webpackPlugin(svgSpriteOptions),
    ],
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.set('resourceQuery', spriteResourceFilter)
  },
})
