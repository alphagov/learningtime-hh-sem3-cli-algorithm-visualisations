module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverageFrom: ['./src/**/*.ts'],
  coveragePathIgnorePatterns: [],
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['**/tests/**/*.test.ts'],
};
