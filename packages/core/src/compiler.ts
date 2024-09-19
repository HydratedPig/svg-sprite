import { readFileSync } from 'node:fs'
import { Buffer } from 'node:buffer'
import { optimizeContent } from './optimize'
import { BaseSprite } from './sprite'
import { SpriteSymbol } from './symbol'
import type { SpriteConfig } from './types'

export class SpriteCompiler {
  #sprite: BaseSprite
  #spriteFPMap: Map<string, string> = new Map()
  #count = 0
  constructor(config: SpriteConfig) {
    this.#sprite = new BaseSprite(config)
  }

  static instance: SpriteCompiler

  static getInstance(config: SpriteConfig) {
    if (!SpriteCompiler.instance) {
      SpriteCompiler.instance = new SpriteCompiler(config)
    }
    return SpriteCompiler.instance
  }

  get sprite() {
    return this.#sprite
  }

  pretreatId(id: string, filePath: string) {
    let uniqueSuffix = this.#spriteFPMap.get(filePath)
    if (!uniqueSuffix) {
      uniqueSuffix = Buffer.from((this.#count++).toString(16)).toString('base64')
      this.#spriteFPMap.set(filePath, uniqueSuffix)
    }
    return `${id}_${uniqueSuffix}`
  }

  addSymbol(opt: { id: string, content: string, filePath: string }) {
    let { id, content, filePath } = opt
    if (!content && filePath) {
      content = readFileSync(filePath).toString()
    }
    else if (!content) {
      return
    }
    const optimized = optimizeContent(content)
    const symbol = new SpriteSymbol(id, content, optimized.content, optimized.body, optimized.viewBox)
    this.#sprite.add(symbol)
  }

  toString() {
    return this.#sprite.toString()
  }
}
