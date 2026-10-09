const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.NODE_ENV || 'production'
console.log(`Webpack is running in [${mode}] mode.`)

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
        test: /\.(png|bmp|svg|jpg|jpeg|gif|webp|avif|eot|ttf|woff|woff2)$/i,
        type: 'asset'
      }
    ]
  },

  optimization: {
    minimizeOptions: {
      html: {
        // Preserve attribute quotes in HTML build output for readability
        normalizeAttributeQuotes: false,
      }
    }
  },

  // Enable debugging from VSCode
  devtool: mode === 'production'
    ? 'source-map'
    : 'eval-source-map',

  // Development server set-up - define static assets directory and paths
  devServer: {
    open: true,
    hot: false, // disable hot reload for plain HTML/CSS/JS development
    compress: true,
    static: {
      directory: path.join(__dirname, 'src'),
      publicPath: '/'
    }
  }
}
