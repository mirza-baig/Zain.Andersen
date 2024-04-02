const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/.next/',
    '/.storybook/',
    '/node_modules/',
    '/public/',
    'lib/jest/',
    'lib/mocks/',
    'mock-data.*'
  ],
  coverageReporters: ["clover", "json", "lcov", "text", "cobertura"],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^lib/(.*)$': '<rootDir>/src/lib/$1',
    '^temp/(.*)$': '<rootDir>/src/temp/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
  },
  reporters: [
    // This enables console output for local development and build log output in Pipelines.
    'default',

    // This is to populate the Tests tab on the Build Results page in Azure Pipelines.
    // See the "publish test results" step in ./azure-pipelines.yml.
    [
        'jest-junit',
        {
            outputDirectory: './test-results/',
            outputName: 'junit.xml',
        },
    ],

    "jest-ado-reporter",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
