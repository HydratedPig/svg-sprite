import { SVG, cleanupSVG, runSVGO } from '@iconify/tools'

export function optimizeContent(content: string) {
  const svg = new SVG(content)
  cleanupSVG(svg)
  runSVGO(svg)
  return {
    content: svg.toMinifiedString(),
    body: svg.getBody(),
    viewBox: svg.viewBox,
  }
}
