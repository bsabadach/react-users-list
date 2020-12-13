export default {
  ava: {
    sources: ['src/**/*.{ts,tsx}', '!dist/**/*'],
    files: ['src/**/*.test.{ts,tsx}'],
    cache: false,
    failFast: false,
    failWithoutAssertions: false,
    tap: true,
    compileEnhancements: false,
    extensions: ['ts', 'tsx'],
    require: ['ts-node/register', 'tsconfig-paths/register']
  }
}
