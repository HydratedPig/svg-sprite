declare module '*.svg?sprite=true' {
  import type { DefineComponent, RendererElement, RendererNode, VNode } from 'vue'

  const component: DefineComponent<{
    width: {
      type: NumberConstructor
    }
    height: {
      type: NumberConstructor
    }
    size: {
      type: NumberConstructor
    }
  }, () => VNode<RendererNode, RendererElement, {
    [key: string]: any
  }>, unknown>
  export default component
}
