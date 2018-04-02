const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const HtmlPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
	devtool: "eval-source-map",
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development"),
		}),
		new webpack.NamedModulesPlugin(),
		new HtmlPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
})
