const path = require('path');
const process = require('process');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const PROD = (process.env.NODE_ENV === 'PROD');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
      'background/background': './background/index.js',
      'content/tbb-menu/tbb-menu': './content/tbb-menu/index.js',
      'content/addon-page/addon-page': './content/addon-page/index.js',
      'content/page-injections/injection': './content/page-injections/index.js',
      'content/sidebar/sidebar': './content/sidebar/index.js',
      'content/options-ui/options': './content/options-ui/index.js',
      'content/detail-view/detail-view': './content/detail-view/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'extension'),
      filename: '[name].wp.js'
    },
    // avoid UglifyJS (-> https://developer.mozilla.org/en-US/Add-ons/Source_Code_Submission#Requirements_for_the_source_package)
    mode: 'development',//PROD ? 'production' : 'development',
    devtool: PROD ? false : 'inline-source-map',
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
          outputPath: 'icons/',
          publicPath: '../../icons/'
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
      new ExtractTextPlugin('[name].css'),
      new DuplicatePackageCheckerPlugin()
    ]
}
