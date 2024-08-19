import type { BaseSprite } from '@svg-sprite/shared'
import packageJson from '../package.json'

export const packageName = packageJson.name
export const teleportSvg = `${packageName}/teleport.svg`
export function getSvgTemp(id: string) {
  return `
import TeleportSvg from '${teleportSvg}';
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
          default: () => [h('use', { href: '#${id}' }), h(TeleportSvg)]
        }
      )
    }
  }
})
  `
}

export function getTeleportTemp(sprite: BaseSprite) {
  return `
import { defineComponent, h, Teleport } from 'vue';
export default defineComponent({
  setup() {
    return () => {
      return h(
        Teleport,
        {
          to: 'body',
        },
        h('div', { innerHTML: '${sprite.toString()}' })
      )
    }
  }
})
  `
}
