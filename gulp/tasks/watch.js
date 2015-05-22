var gulp = require('gulp');
var config = require('../config').app;
var connect = require('gulp-connect');
var watch = require('gulp-watch');

gulp.task('watch', ['watch:src', 'watch:dist']);

// This task is responsible for watching the source folder.
gulp.task('watch:src', function() {
  gulp
    .watch([
      	config.src + '*.less',
      	config.src + '**/*.less'
      ], ['styles']
    );

  gulp
    .watch([
  	config.src + '**/*.js*',
  	config.src + '**/*.html',
  	], ['javascript']);
});

// This task is responsible for watching the dist folder.
gulp.task('watch:dist', function() {
  return gulp
    .src(config.dest)
    .pipe(watch([
    		config.dest + '*.*',
        config.dest + '**/*.*'
    	]))
      .pipe(connect.reload());
});