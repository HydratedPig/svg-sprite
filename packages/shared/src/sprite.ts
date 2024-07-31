import type SpriteSymbol from './symbol'
import type { IDisposable } from './dispose'
import type { SpriteConfig } from './types'

export default class BaseSprite implements IDisposable {
  private symbols = new Map<string, SpriteSymbol>()
  constructor(private config: SpriteConfig) { }

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
    // TODO
    return ''
  }

  valueOf() {
    return this.toString()
  }

  dispose() {
    this.symbols.clear()
  }
}
