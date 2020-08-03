module.exports = {
    transform: { '^.+\\.jsx?$': 'babel-jest' },
    moduleFileExtensions: ['js', 'jsx'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
