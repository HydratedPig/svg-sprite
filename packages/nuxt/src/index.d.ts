/// <reference types="nitropack" />
import type { H3Event } from 'h3'
import type { NuxtIslandContext, NuxtIslandResponse, NuxtRenderHTMLContext } from 'nuxt/dist/core/runtime/nitro/renderer'

// Note: Keep in sync with nuxt/dist/index.mjs
declare module 'nitropack' {
  interface NitroRuntimeHooks {
    'render:html': (htmlContext: NuxtRenderHTMLContext, context: { event: H3Event }) => void | Promise<void>
    'render:island': (islandResponse: NuxtIslandResponse, context: { event: H3Event, islandContext: NuxtIslandContext }) => void | Promise<void>
  }
}
