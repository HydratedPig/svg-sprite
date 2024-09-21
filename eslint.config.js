import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  // react: true,
  jsonc: true,
  rules: {
    'no-console': 'warn',
  },
})
