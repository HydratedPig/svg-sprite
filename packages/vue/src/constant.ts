import type { BaseSprite } from '@svg-sprite/core'
import { VirtualFilename } from '@svg-sprite/core'
import packageJson from '../package.json'

export const packageName = packageJson.name
export function getSvgTemp(id: string) {
  return `
import { defineComponent, h, getCurrentInstance } from 'vue';
import '${VirtualFilename}'

export default defineComponent({
  name: 'svg-sprite-${id}',
  props: {
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    size: {
      type: Number,
    }
  },
  setup(props, { attrs }) {
    return () => {
      return h(
        'svg', 
        { 
          width: props.width || props.size, height: props.height || props.size, ...attrs 
        },
        {
          default: () => [h('use', { href: '#${id}' })]
        }
      )
    }
  }
})
  `
}

export function getTeleportTemp(sprite: BaseSprite) {
  return `
import { setVirtualSvgSprite } from '@svg-sprite/vue/runtime/useApi.mjs';
!getVirtualSvgSprite() && setVirtualSvgSprite(${sprite.toString()});
`
}
