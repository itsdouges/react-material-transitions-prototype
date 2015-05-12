var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var config = require('../config.js').app;

var lessConfig = {
    src: config.src + '/index.less',
    dest: config.dest + '/styles',
  };

gulp.task('styles', function() {
  gulp.src(lessConfig.src)
    .pipe(less())
    .pipe(gulp.dest(lessConfig.dest));
});