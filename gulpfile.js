const gulp = require('gulp'),
  webpack = require('webpack-stream'),
  webpack_config = require('./webpack.config.js'),
  named = require('vinyl-named');

let dist;

gulp.task('default', () => {
  gulp.watch(['src/**/*.js'], ['build']);
});

gulp.task('build', () => {

  return gulp.src([
      'src/background/main.js',
      'src/content/tbb-menu/tbb-menu.js',
      'src/content/sidebar/sidebar.js',
      'src/content/options-ui/options.js',
      'src/content/addon-page/addon-page.js',
      'src/content/page-injections/injection.js'

    ]).pipe(named())
      .pipe(webpack(webpack_config))
      .pipe(gulp.dest(''));
});
