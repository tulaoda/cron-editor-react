const webpack = require("webpack"); 
let webpackConfig = {
	entry: "./test.js",
	output:{
		filename:"index.js",
		publicPath:"/"
	},
	mode:"development",
	devtool: "cheap-module-eval-source-map" ,
	devServer: {
		port: 7979,
		open: true,
		host: "0.0.0.0",
		openPage: "./test.html",
		hot: true,
		publicPath:"/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env"], "@babel/preset-react"],
						plugins: [
							[
								"@babel/plugin-proposal-decorators",
								{ legacy: true }
							],
							[
								"@babel/plugin-proposal-class-properties",
								{ loose: true }
							],
							[
								"import",
								{
									libraryName: "antd",
									libraryDirectory: "lib",
									style: true
								}
							],
							"@babel/plugin-transform-runtime",
						]
					}
				}]
			},
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true
						}
					}
				]
			}
		]
	},
	 
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}; 
module.exports = webpackConfig;
