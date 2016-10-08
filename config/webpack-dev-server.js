import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.dev';

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	historyApiFallback: true
}).listen(3000, 'localhost', function (error, result) {
	if (error) {
		return console.log(error);
	}

	console.log('Listening at http://localhost:3000/');
});