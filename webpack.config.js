var Path = require('path');

module.exports = {
  entry: {
    bundle: './client/app.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /vendor/, /bower_components/],
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ],

    noParse: ['react', 'jquery', 'bootstrap']
  },

  output: {
    path: Path.resolve(__dirname, './build'),
    filename: '[name].js',
  },

  devtool: 'eval', //'#source-map',

  //dev-server config
  devServer: {
    contentBase: Path.resolve(__dirname, './build'),

    filename: '[name].js',
    publicPath: '/',
    outputPath: '/',

    //start livereload
    inline: true,

    quiet: true, //debug information close
    noInfo: true,
    lazy: false, //start watch mode
    stats: {colors: true, cached: false, cachedAssets: false}
  }
};
