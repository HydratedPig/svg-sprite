import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'

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
    esbuild({
      sourceMap: false,
    }),
  ],
})
