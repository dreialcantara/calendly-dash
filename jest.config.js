module.exports = {
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.tsx$": "ts-jest/dist",
    },
    transformIgnorePatterns: ["/node_modules/"],
    testEnvironment: "node",
    resolver: "jest-resolver",
    globalSetup: "./globalSetup.js",
    setupFilesAfterEnv: ["./setupFilesAfterEnv.js"],
    testMatch: ["**/*.test.js", "**/*.test.tsx"],
    rootDir: "./src",
    testPathIgnorePatterns: ["/node_modules/", "/build/"],
    moduleNameMapper: {
        "^.+\\.esm$": "<rootDir>/$&",
    },
};
