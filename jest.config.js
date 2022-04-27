const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: pathsToModuleNameMapper(
      { '@project/*': ['./*'] },
      { prefix: '<rootDir>/src/' }
    )
};
