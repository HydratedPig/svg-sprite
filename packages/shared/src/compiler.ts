import { SVG, cleanupSVG, runSVGO } from '@iconify/tools'

export default class SpriteCompiler {
  private constructor() {

  }

  static instance: SpriteCompiler

  static getInstance() {
    if (!SpriteCompiler.instance) {
      SpriteCompiler.instance = new SpriteCompiler()
    }
    return SpriteCompiler.instance
  }

  addSymbol(opt: { id: string, content: string, filePath: string }) {
    const { id, content, filePath } = opt
    const svg = new SVG(content)
    cleanupSVG(svg)
    runSVGO(svg)
  }
}
