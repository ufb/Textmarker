const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
      'background/background': './background/index.js',
      'content/tbb-menu/tbb-menu': './content/tbb-menu/js/index.js',
      'content/addon-page/addon-page': './content/addon-page/js/index.js',
      'content/page-injections/injection': './content/page-injections/js/index.js',
      'content/sidebar/sidebar': './content/sidebar/js/index.js',
      'content/options-ui/options': './content/options-ui/js/index.js',
      'content/detail-view/detail-view': './content/detail-view/js/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'extension'),
      filename: '[name].wp.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        query: {
          presets: ['es2015']
        }
      }, {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'content/icons/',
          publicPath: '../icons/'
        }
       }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }]
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
}/*, {
    entry: {
      'content/addon-page/addon-page': './src/content/addon-page/sass/main.scss',
      'content/detail-view/detail-view': './src/content/detail-view/sass/main.scss'
    },
    output: {
      path: path.resolve(__dirname, 'extension'),
      filename: '[name].css'
    },
    mode: 'production',
    plugins: [
      new ExtractTextPlugin('[name].css')
    ],
    module: {
      rules: [{
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '../icons/[name].[ext]',
          outputPath: 'content/icons/'
        }
       }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }]
    }
}]*/
