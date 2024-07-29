import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  defineNuxtModule,
  useNitro,
} from '@nuxt/kit'

const packageSrcPath = resolve(fileURLToPath(import.meta.url), '.')

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('ready', () => {
      const nitro = useNitro()
      nitro.options.plugins = nitro.options.plugins || []
      nitro.options.plugins.push(resolve(packageSrcPath, './nitro/inline.ts'))
    })
  },
})
