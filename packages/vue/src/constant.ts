import type { BaseSprite } from '@svg-sprite/shared'
import packageJson from '../package.json'

export const packageName = packageJson.name
export const teleportSvg = `${packageName}/teleport.svg`
export function getSvgTemp(id: string) {
  return `
import { defineComponent, h } from 'vue';

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
