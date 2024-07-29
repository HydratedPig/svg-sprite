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
      // TODO error handler
      return false
    }
    else {
      this.symbols.set(symbol.id, symbol)
      return true
    }
  }

  delete(id: string) {
    if (this.symbols.has(id)) {
      this.symbols.delete(id)
      return true
    }
    return false
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
