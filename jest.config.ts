export default {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['<rootDir>src/**/*.{ts, tsx}'],
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
