module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@project/(.*)$': '<rootDir>/$1'
  }
};