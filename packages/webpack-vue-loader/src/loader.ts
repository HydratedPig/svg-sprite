import { parse } from 'node:path'
import type { LoaderContext } from 'webpack'
import { SpriteCompiler, forceCamelCase2hyphenate } from '@svg-sprite/core'
import { getSvgTemp, getTeleportTemp, teleportSvg } from './constant'

export function loader(this: LoaderContext<Record<string, any>>, content: string) {
  if (!this.webpack) {
    this.emitWarning(new Error('Run it in webpack\'s environment'))
    return
  }
  const options = this.getOptions()
  const sync = this.async()
  Promise.resolve().then(() => {
    const path = this.resourcePath
    const spriteCompiler = SpriteCompiler.getInstance(options)
    if (path.endsWith('webpack-vue-loader/teleport.svg')) {
      const teleportTemp = getTeleportTemp(spriteCompiler.sprite)
      sync(null, teleportTemp)
      return
    }
    const filename = parse(path).name
    const sourceId = options.getSourceId?.(filename) ?? forceCamelCase2hyphenate(filename)
    spriteCompiler.addSymbol({
      id: sourceId,
      content,
      filePath: path,
    })
    const svgTemp = getSvgTemp(sourceId)
    sync(null, svgTemp)
  })
}
