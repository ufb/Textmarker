const path = require('path');

module.exports = {
    entry: {
      'extension/background/background': './src/background/index.js',
      'extension/content/tbb-menu/tbb-menu': './src/content/tbb-menu/js/index.js',
      'extension/content/addon-page/addon-page': './src/content/addon-page/js/index.js',
      'extension/content/page-injections/injection': './src/content/page-injections/js/index.js',
      'extension/content/sidebar/sidebar': './src/content/sidebar/js/index.js',
      'extension/content/options-ui/options': './src/content/options-ui/js/index.js',
      'extension/content/detail-view/detail-view': './src/content/detail-view/js/index.js'
    },
    output: {
      filename: '[name].wp.js'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        query: {
          presets: ['es2015']
        }
      }]
    }
};
