const esModules = ['lodash-es'].join('|');

module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFiles: ['<rootDir>/tests/jest-setup.ts'],
  testMatch: [
    '**/tests/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)'
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts,vue}'],
  transform: {
    [`(${esModules}).+\\.js$`]: 'babel-jest'
  },
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!${esModules})`
  ],
};
