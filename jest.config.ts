export default {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts, tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['text', 'text-summary', 'html'],
}
