const glob = require("glob-all")
const path = require("path")
const merge = require("webpack-merge")
const webpack = require("webpack")
const HtmlPlugin = require("html-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const PurifyCSSPlugin = require("purifycss-webpack")
const WebappPlugin = require("webapp-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const common = require("./webpack.common.js")

module.exports = merge(common, {
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "assets/scripts/vendor.[hash].js",
			minChunks(module) {
				return module.context && module.context.indexOf("node_modules") >= 0
			},
		}),

		new UglifyJsPlugin({
			uglifyOptions: {
				ecma: 8,
				warnings: false,
				compress: {
					warnings: false,
					conditionals: true,
					unused: true,
					comparisons: true,
					sequences: true,
					dead_code: true,
					evaluate: true,
					if_return: true,
					join_vars: true,
					drop_console: true,
					drop_debugger: true,
				},
				output: {
					comments: false,
					beautify: false,
				},
				sourceMap: false,
				pure_funcs: ["console.log"],
				toplevel: false,
				nameCache: null,
				ie8: false,
				keep_classnames: undefined,
				keep_fnames: false,
				safari10: false,
			},
		}),
		new WebappPlugin({
			logo: "./src/assets/images/favicon/index.svg",
			favicons: {
				appName: "portfolio",
				appDescription: "My awesome portfolio",
				developerName: "Naomi Hauret",
				developerURL: null,
				background: "transparent",
				theme_color: "black",
				icons: {
					android: false,
					appleIcon: false,
					appleStartup: false,
					coast: false,
					favicons: true,
					firefox: false,
					windows: false,
					yandex: false,
				},
			},
		}),
		new HtmlPlugin({
			template: "./src/index.html",
			excludeChunks: ["base"],
			filename: "index.html",
			minify: {
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
			},
		}),
		new PurifyCSSPlugin({
			minimize: true,
			paths: glob.sync([path.join(__dirname, "src/.html"), path.join(__dirname, "src/.js")]),
		}),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|/,
			threshold: 10240,
			minRatio: 0.8,
		}),
	],
})
