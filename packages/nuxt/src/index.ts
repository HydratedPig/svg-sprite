import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  defineNuxtModule,
  useNitro,
} from '@nuxt/kit'

const packageSrcPath = resolve(fileURLToPath(import.meta.url), '.')
/**
 * 会有一个报错： The inferred type of 'default' cannot be named without a reference to '.pnpm/@nuxt+schema@3.12.4_rollup@4.18.1/node_modules/@nuxt/schema'. This is likely not portable. A type annotation is necessary.
 * 解决方案： dependencies 显示声明 @nuxt/schema
 * reference: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#consulting-packagejson-dependencies-for-declaration-file-generation
 * 根本问题其实是 pnpm 的 node_modules 与 typescript 的 resolvedModules 逻辑冲突
 */
export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook('ready', () => {
      const nitro = useNitro()
      nitro.options.plugins = nitro.options.plugins || []
      nitro.options.plugins.push(resolve(packageSrcPath, './nitro/inline.ts'))
    })
  },
})
