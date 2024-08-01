
import { SVG, cleanupSVG, runSVGO } from '@iconify/tools'
import { optimize } from 'svgo'

export function optimizeContent(content: string, svgo = true) {
  if (svgo) {
    return optimize(content, {
      multipass: false,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
      ],
    })
  } else {
    const svg = new SVG(content)
    cleanupSVG(svg)
    runSVGO(svg)
    return svg.toMinifiedString()
  }
}