export const defaultAttrs = {
  'xmlns': 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
}

export const SVG_SPRITE_ROOT = '__SVG_SPRITE_ROOT__'

export const HYPHENATE_RE = /\B([A-Z])/g

export const spriteResourceQuery = 'sprite=true'
export const spriteFolderPath = `**/*.svg?${spriteResourceQuery}`

export const VirtualPrefix = '\0virtual:'
export const VirtualFilename = '@svg-sprite/core/resolver'
