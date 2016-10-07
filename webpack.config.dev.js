import webpack from 'webpack';
import path from 'path';

export default {
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	debug: true,
	noInfo: true,
	entry: [
		path.resolve(__dirname, 'src/index.js')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			__DEV__: true
		}),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
			{ test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file' },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
			{ test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]' },
			{ test: /\.ico$/, loader: 'file?name=[name].[ext]' },
			{ test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'] }
		]
	},
	postcss: ()=> [autoprefixer]
}