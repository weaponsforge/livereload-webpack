const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Files to watch for
  entry: './src/index.js',

  // Bundle/build output directory
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title : 'Live Reload - Webpack',
      template : './src/index.html'
    })
  ],

  // Set node modules to use for various file types
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
     }
    ]
  },

  // Development server set-up - define static assets directory and paths
  devServer: {
    open: true,
    publicPath: '',
    contentBase: path.resolve(__dirname, 'src'),
    watchContentBase: true,
    compress: true
  }
}