import { defineConfig } from 'rollup'
import swc from '@rollup/plugin-swc'

export default defineConfig({
  input: {
    index: 'src/index.ts',
  },
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: '[name].mjs',
    },
  ],
  plugins: [
    swc(),
  ],
})
