import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { ISvgSpriteVueOptions } from './type'

export const unplugin = /* #__PURE__ */ createUnplugin<ISvgSpriteVueOptions | undefined>((options) => {
  const { resolver } = options || {}
  return {
    name: '@svg-sprite/vue',
    resolveId(id, importer) {
      console.log(id, importer)
      return null
    },
    transformInclude(id) {
      return resolver?.test(id)
    },
    transform(code) {
      return code.replace(/<template>/, '<template><div>Injected</div>')
    },
  }
})

export default unplugin

export const vitePlugin = unplugin.vite
export const rollupPlugin = unplugin.rollup
export const rolldownPlugin = unplugin.rolldown
export const webpackPlugin = unplugin.webpack
export const rspackPlugin = unplugin.rspack
export const esbuildPlugin = unplugin.esbuild
export const farmPlugin = unplugin.farm
