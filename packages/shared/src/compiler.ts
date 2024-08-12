import { optimizeContent } from './optimize'
import BaseSprite from './sprite'
import SpriteSymbol from './symbol'
import type { SpriteConfig } from './types'

export default class SpriteCompiler {
  private sprite: BaseSprite
  constructor(config: SpriteConfig) {
    this.sprite = new BaseSprite(config)
  }

  static instance: SpriteCompiler

  static getInstance(config: SpriteConfig) {
    if (!SpriteCompiler.instance) {
      SpriteCompiler.instance = new SpriteCompiler(config)
    }
    return SpriteCompiler.instance
  }

  addSymbol(opt: { id: string, content: string, filePath: string }) {
    const { id, content, filePath } = opt
    if (!content && filePath) {
      // TODO: Read from filePath again
    }
    else if (!content) {
      return
    }
    const optimized = optimizeContent(content)
    const symbol = new SpriteSymbol(id, content, optimized.content, optimized.body, optimized.viewBox)
    this.sprite.add(symbol)
  }
}
