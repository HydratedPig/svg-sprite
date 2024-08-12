import { defaultAttrs } from './constant'
import type { ViewBox } from './types'
import { attrs2Str } from './utils'

export default class SpriteSymbol {
  constructor(public id: string, public rawContent: string, public content: string, public body: string, public viewBox: ViewBox) {

  }

  get viewBoxStr() {
    const { top, left, width, height } = this.viewBox
    return [top, left, width, height].join(' ')
  }

  toSymbolString() {
    return `<symbol ${attrs2Str(defaultAttrs)} id="${this.id}" viewBox="${this.viewBoxStr}">${this.body}</symbol>`
  }

  toString() {
    return this.content
  }

  toRawString() {
    return this.rawContent
  }
}
