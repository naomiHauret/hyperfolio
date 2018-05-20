module.exports = {
	plugins: [
		require("postcss-normalize"),
		require("postcss-fontpath")({
			checkFiles: true,
		}),
		require("postcss-cssnext"),
	],
}
