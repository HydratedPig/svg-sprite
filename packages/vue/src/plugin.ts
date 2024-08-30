import { parse } from 'node:path'
import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import { SpriteCompiler, forceCamelCase2hyphenate, spriteFolderPath } from '@svg-sprite/shared'
import type { ISvgSpriteVueOptions } from './type'
import { getSvgTemp } from './constant'

export function createSpriteFilter(options: ISvgSpriteVueOptions = {}) {
  const { include = spriteFolderPath, exclude } = options
  const filter = createFilter(include, exclude)
  return filter
}

export const unplugin = createUnplugin<ISvgSpriteVueOptions | undefined>((options = {}) => {
  const { sprite, getSourceId } = options
  const filter = createSpriteFilter(options)
  const spriteCompiler = SpriteCompiler.getInstance(sprite ?? {})
  return {
    name: '@svg-sprite/vue',
    transformInclude(id) {
      return filter(id)
    },
    transform(code, id) {
      const filename = parse(id).name
      const sourceId = getSourceId?.(filename) ?? forceCamelCase2hyphenate(filename)
      spriteCompiler.addSymbol({
        id: sourceId,
        content: code,
        filePath: id,
      })
      const svgTemp = getSvgTemp(sourceId)
      return svgTemp
    },
  }
})

export default unplugin

export {
  spriteFolderPath,
}

export const vitePlugin = unplugin.vite
export const rollupPlugin = unplugin.rollup
export const rolldownPlugin = unplugin.rolldown
export const webpackPlugin = unplugin.webpack
export const rspackPlugin = unplugin.rspack
export const esbuildPlugin = unplugin.esbuild
export const farmPlugin = unplugin.farm
