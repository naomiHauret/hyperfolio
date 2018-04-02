const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const SocialTagsPlugin = require('social-tags-webpack-plugin')

const exludedFolders = [path.join(__dirname, "node_modules")]

module.exports = {
	entry: ["./src/index.js"],
	output: {
		filename: "assets/scripts/[name].[hash].js",
		path: path.resolve(__dirname, "dist"),
	},
	resolve: {
		modules: [path.resolve("./src"), path.resolve("./node_modules")],
	},
	module: {
		rules: [
			// JS
			{
				test: /\.js$/,
				exclude: exludedFolders,
				use: "babel-loader",
			},
			// CSS
			{
				test: /assets(\/|\\).*\.css$/,
				exclude: exludedFolders,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?importLoaders=1!postcss-loader",
				}),
			},
			// Images
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "assets/images/[name].[ext]",
						},
					},
				],
			},
 			// Fonts
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							publicPath: "./../fonts/",
							outputPath: "assets/fonts/",
							name: "[name].[ext]",
						},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CopyPlugin(([
    		{ from: './src/assets/fonts/**/*', to: './dist/assets/fonts' }
  		])),
		new ExtractTextPlugin({
			filename: "assets/stylesheets/[name].[hash].css",
			allChunks: true,
		}),
		new SocialTagsPlugin({
			appUrl: "http://www.ines-guerrini.com/",
			facebook: {
				'og:url': "http://www.ines-guerrini.com/",
				'og:type': "website",
				'og:title': "Inès Guerrini - Creative UI Designer",
				// 'og:image': path.resolve('src/img/book.png'),
				'og:description': "Hi, I'm Inès Guerrini, a Creative UI Designer specialized in web, interaction and motion design. I'm based in Nantes and available for freelance.",
				'og:site_name': "Inès Guerrini - Creative UI Designer",
				'og:locale': "en_US",
				'og:article:author': "Inès Guerrini",
			},
			twitter: {
				"twitter:card": "summary_large_image",
				"twitter:creator": "@https://twitter.com/ness_gabrielle",
				"twitter:url": "http://www.ines-guerrini.com/",
				"twitter:title": "Inès Guerrini - Creative UI Designer",
				"twitter:description": "Hi, I'm Inès Guerrini, a Creative UI Designer specialized in web, interaction and motion design. I'm based in Nantes and available for freelance.",
				// "twitter:image": path.resolve('src/img/book.png')
			},
    	}),
		new webpack.IgnorePlugin(/caniuse-lite\/data\/regions/),
	],
}
