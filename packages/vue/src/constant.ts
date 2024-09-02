import type { BaseSprite } from '@svg-sprite/core'
import packageJson from '../package.json'

export const packageName = packageJson.name
export const VirtualPrefix = '\0virtual:'
export const VirtualFilename = '@svg-sprite/vue/resolver'
export function getSvgTemp(id: string) {
  return `
import { defineComponent, h, getCurrentInstance } from 'vue';
import { useSvgSpriteCreator } from '${VirtualFilename}'

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
    const instance = getCurrentInstance();
    useSvgSpriteCreator(instance.appContext)
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
import { defineComponent, h, Teleport, render } from 'vue';
let svgSprite = undefined
export function useSvgSpriteCreator(context) {
  if (!svgSprite) {
    svgSprite = h(
      Teleport,
      {
        to: 'body',
      },
      h('div', { innerHTML: '${sprite.toString()}' })
    )
  }
}
  `
}
