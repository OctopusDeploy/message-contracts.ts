const path = require("path");

module.exports = {
    preset: "ts-jest/presets/js-with-ts",
    globals: {
        "ts-jest": {
            tsConfig: path.resolve("jest.tsconfig.json"),
        },
    },
    projects: [
        {
            displayName: "test",
            moduleDirectories: ["<rootDir>/src/", "node_modules"],
            moduleFileExtensions: ["ts", "js"],
            resetMocks: true,
            setupFilesAfterEnv: ["jest-expect-message", "jest-extended"],
            testEnvironment: "jsdom",
            testRegex: ".*\\.(test|spec)\\.(ts)$",
            transform: {
                ".(ts)": "ts-jest",
            },
        },
    ],
};