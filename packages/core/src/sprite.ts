import type { SpriteSymbol } from './symbol'
import type { SpriteConfig } from './types'
import { SVG_SPRITE_ROOT, defaultAttrs } from './constant'
import { attrs2Str } from './utils'

export class BaseSprite {
  private symbols = new Map<string, SpriteSymbol>()
  id: string
  constructor(private config: SpriteConfig) {
    this.id = config.id || SVG_SPRITE_ROOT
  }

  get size() {
    return this.symbols.size
  }

  add(symbol: SpriteSymbol) {
    if (this.symbols.has(symbol.id)) {
      this.symbols.set(symbol.id, symbol)
      console.warn('It may cause some chaos by duplicate declarer of symbolId.', symbol.id)
    }
    else {
      this.symbols.set(symbol.id, symbol)
    }
  }

  delete(id: string) {
    if (this.symbols.has(id)) {
      this.symbols.delete(id)
    }
  }

  get(id: string) {
    return this.symbols.get(id)
  }

  has(id: string) {
    return this.symbols.has(id)
  }

  toString(): string {
    const attrs = Object.assign({}, defaultAttrs, this.config.attrs)
    const symbols: string[] = []
    this.symbols.forEach((s) => {
      symbols.push(s.toSymbolString())
    })
    return `<svg ${attrs2Str(attrs)} style="position:absolute;width:0;height:0" id="${this.id}">${symbols.join('')}</svg>`
  }

  valueOf() {
    return this.toString()
  }
}
