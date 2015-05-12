var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config').app;

gulp.task('server', function() {
  connect.server({
      root: config.dest,
      host: 'localhost',
      port: 8080,
      livereload: true
    });
});
