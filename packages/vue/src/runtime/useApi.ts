import { computed, ref } from 'vue'

const virtualSvgSprite = ref('')

export const setVirtualSvgSprite = (sprite: string) => (virtualSvgSprite.value = sprite)

export const getVirtualSvgSprite = () => virtualSvgSprite.value

export function useVirtualSvgSprite() {
  return {
    sprite: computed(() => getVirtualSvgSprite()),
  }
}
