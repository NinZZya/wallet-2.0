module.exports = {
	rootDir: "./src",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		"^.+\\.js?$": "babel-jest",
	},
	testRegex: ".test.(ts?||tsx?)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
	},
	transformIgnorePatterns: ["<rootDir>/npde_modules/firebase-mock-js"],
	coveragePathIgnorePatterns: [
		"node_modules",
		"<rootDir>/components",
		"<rootDir>/mocks",
		"index.ts",
		"module.ts",
		"api.ts",
		"<rootDir>/modules/transactions-list/components/row.tsx",
	],
	coverageThreshold: {
		global: {
			branches: 75,
			functions: 75,
			lines: 75,
			statements: -85,
		},
	},
};
