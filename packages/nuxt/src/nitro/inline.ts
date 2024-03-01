import type { NuxtRenderHTMLContext } from 'nuxt/dist/core/runtime/nitro/renderer'
import type { NitroApp } from 'nitropack'

export default function (nitro: NitroApp) {
  nitro.hooks.hook('render:html', (htmlContext: NuxtRenderHTMLContext) => {
    // Do not insert root into bodyPrepend. This will cause Teleport rendering with fault in client.
    // The bugs maybe occur in @vue/server-render/ssrRenderTeleport
    htmlContext.body.unshift('<svg width="0" height="0" style="position: absolute" id="__svg_sprite"><use xlink:href="/logo/svg.svg"/></svg>')
  })
}
