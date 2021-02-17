module.exports = {
	presets: [
		["@babel/preset-env", { targets: "defaults" }],
		"@babel/preset-react",
		"@babel/preset-typescript",
	],
	plugins: [
		"@babel/plugin-transform-runtime",
		"@babel/plugin-proposal-class-properties",
	],
	env: {
		production: {
			plugins: ["@emotion"],
		},
		development: {
			plugins: [["@emotion", { sourceMap: true }]],
		},
	},
};
