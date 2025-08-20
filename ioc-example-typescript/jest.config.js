// jest.config.js
export default {
    preset: 'ts-jest/presets/js-with-ts-esm',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.ts$': '$1'
    },
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            useESM: true
        }]
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/']
};