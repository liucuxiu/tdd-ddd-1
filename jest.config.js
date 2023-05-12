// eslint-disable-next-line no-undef
module.exports = {
  transform: {
    '^.+\\.ts?$': [ 'ts-jest',{
      'ts-jest': {
        'tsconfig': 'tsconfig.json'
      }
    }
    ]
  },
  testEnvironment: 'node',
  testRegex: './src/.*\\.(test|spec)?\\.(ts|ts)$',
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
  roots: [
    '<rootDir>/src'
  ],
};