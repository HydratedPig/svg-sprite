import type { LoaderContext } from 'webpack';

export function loader(this: LoaderContext<Record<string, any>>, content: string) {
  const sync = this.async()
}