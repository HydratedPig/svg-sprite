export interface IDisposable {
  dispose: () => void
}

export function isIterable<T = any>(val: any): val is Iterable<T> {
  return val && typeof val === 'object' && typeof val[Symbol.iterator] === 'function'
}

export function dispose<T extends IDisposable>(disposable: T): T
export function dispose<T extends IDisposable>(disposable: T | undefined): T | undefined
export function dispose<T extends IDisposable>(disposable: Iterable<T>): Array<T>
export function dispose<T extends IDisposable>(arg: T | Array<T> | undefined): any {
  if (isIterable(arg)) {
    return arg.map((a) => {
      a?.dispose()
      return a
    })
  }
  else {
    arg?.dispose()
    return arg
  }
}
