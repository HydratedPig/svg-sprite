import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'

export default defineConfig({
  input: {
    index: './src/index.ts',
  },
  output: {
    dir: 'dist',
  },
  plugins: [dts({ respectExternal: true })],
})
