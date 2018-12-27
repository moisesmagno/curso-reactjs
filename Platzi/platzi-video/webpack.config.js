const path = require('path');

module.exports = {
	entry: path.resolve(__dirname,'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	devServer:{
		// contentBase: path.resolve(__dirname, 'dist', 'js')
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_module/,
				use:{
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			}
		]
	}
}
