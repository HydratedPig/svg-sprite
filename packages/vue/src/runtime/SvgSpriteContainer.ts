import { defineComponent, h } from 'vue'
import { useVirtualSvgSprite } from './useApi'

export default defineComponent({
  name: 'SvgSpriteContainer',
  setup() {
    const { sprite } = useVirtualSvgSprite()
    return () => {
      return h('div', { innerHTML: sprite.value })
    }
  },
})
