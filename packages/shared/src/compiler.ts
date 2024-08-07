import { optimizeContent } from './optimize'

export default class SpriteCompiler {
  symbols = new Map()

  static instance: SpriteCompiler

  static getInstance() {
    if (!SpriteCompiler.instance) {
      SpriteCompiler.instance = new SpriteCompiler()
    }
    return SpriteCompiler.instance
  }

  addSymbol(opt: { id: string, content: string, filePath: string }) {
    const { id, content, filePath } = opt
    const optimized = optimizeContent(content)
  }
}
