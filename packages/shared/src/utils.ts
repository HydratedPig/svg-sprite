export function attrs2Str<T extends Record<string, any>>(attrs: T) {
  return Object.keys(attrs).reduce((s, a: string) => {
    s += `${a}="${attrs[a]}" `
    return s
  }, '').replace(/ $/, '')
}
