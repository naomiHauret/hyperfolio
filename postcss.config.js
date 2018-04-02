module.exports = {
	plugins: [
		require("postcss-normalize"),
		require("postcss-fontpath")({
			checkFiles: true,
		}),
	],
}
