import { HYPHENATE_RE } from './constant'

export function attrs2Str<T extends Record<string, any>>(attrs: T) {
  return Object.keys(attrs).reduce((s, a: string) => {
    s += `${a}="${attrs[a]}" `
    return s
  }, '').replace(/ $/, '')
}

/** CamelCase to hyphenate */
export function forceCamelCase2hyphenate(str: string): string
export function forceCamelCase2hyphenate(str: undefined): undefined
export function forceCamelCase2hyphenate(str?: string) {
  return str?.replace(HYPHENATE_RE, '_$1').toLowerCase()
}
