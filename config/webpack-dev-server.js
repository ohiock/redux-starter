import webpack from 'webpack'; // eslint-disable-line
import WebpackDevServer from 'webpack-dev-server'; // eslint-disable-line

import config from './webpack.config.dev';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}).listen(3000, 'localhost', (error) => {
  if (error) {
    console.log(error);

    return;
  }

  console.log('Listening at http://localhost:3000/');
});
