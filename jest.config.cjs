module.exports = {
    testEnvironment: 'node',
    verbose: true,
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.mjs$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'jsx', 'mjs'],
};
