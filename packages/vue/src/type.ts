import type { FilterPattern } from '@rollup/pluginutils'
import type { SpriteConfig } from '@svg-sprite/core/src/types'

export interface ISvgSpriteVueOptions {
  include?: FilterPattern
  exclude?: FilterPattern
  sprite?: SpriteConfig
  getSourceId?: (id?: string) => string
}
