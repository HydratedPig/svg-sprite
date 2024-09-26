import process from 'node:process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { existsSync, readdirSync, statSync } from 'node:fs'
import { swc } from 'rollup-plugin-swc3'
import type { OutputOptions, RollupOptions } from 'rollup'
import { defineConfig } from 'rollup'
import json from '@rollup/plugin-json'
// import Starter from 'unplugin-starter/rollup'

const target = process.env.TARGET
const CONST_PKG = 'packages'

if (!target)
  throw new Error('TARGET package must be specified via --environment flag.')

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const packagesDir = path.resolve(__dirname, CONST_PKG)
const packageDir = path.resolve(packagesDir, target)
const resolve = p => path.resolve(packageDir, p)

const runtimeDir = resolve('src/runtime')

const plugins = [
  json(),
  swc({
    include: [/\.(m|c)?[jt]sx?$/],
  }),
]

function getFilesByDir(dir: string) {
  return (existsSync(dir) ? readdirSync(dir, { recursive: true }) : []).map((i) => {
    const p = `${dir}/${i}`
    const stats = statSync(p)
    return {
      path: p,
      stats,
    }
  }).filter(i => i.stats.isFile())
}

function getDistDir(dir: string = 'dist'): OutputOptions[] {
  return [
    {
      dir: resolve(dir),
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
    {
      dir: resolve(dir),
      format: 'es',
      entryFileNames: '[name].mjs',
    },
  ]
}

export default defineConfig([
  {
    input: resolve('src/index.ts'),
    output: getDistDir(),
    plugins,
  },
  ...getFilesByDir(runtimeDir).map((i) => {
    return {
      input: i.path,
      output: getDistDir('runtime'),
      external: [/.*/],
      plugins,
    } as RollupOptions
  }),
])
