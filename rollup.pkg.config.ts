import process from 'node:process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import swc from '@rollup/plugin-swc'
import { defineConfig } from 'rollup'

const target = process.env.TARGET
const CONST_PKG = 'packages'

if (!target)
  throw new Error('TARGET package must be specified via --environment flag.')

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const packagesDir = path.resolve(__dirname, CONST_PKG)
const packageDir = path.resolve(packagesDir, target)
const resolve = p => path.resolve(packageDir, p)

export default defineConfig({
  input: {
    index: resolve('src/index.ts'),
  },
  output: [
    {
      dir: resolve('dist'),
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
    {
      dir: resolve('dist'),
      format: 'es',
      entryFileNames: '[name].mjs',
    },
  ],
  plugins: [
    swc(),
  ],
})
