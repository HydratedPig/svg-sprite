import { parse } from 'node:path'
import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import { SpriteCompiler, VirtualFilename, VirtualPrefix, forceCamelCase2hyphenate, spriteFolderPath } from '@svg-sprite/core'
import type { ISvgSpriteVueOptions } from './type'
import { getSvgTemp, getTeleportTemp } from './constant'

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
    resolveId(id) {
      if (id === VirtualFilename) {
        return VirtualPrefix + id
      }
      return null
    },
    loadInclude(id) {
      if (id.startsWith(VirtualPrefix)) {
        return true
      }
      return false
    },
    load(id) {
      if (id.startsWith(VirtualPrefix)) {
        const idNoPrefix = id.slice(VirtualPrefix.length)
        return idNoPrefix === VirtualFilename ? getTeleportTemp(spriteCompiler.sprite) : null
      }
      return null
    },
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
