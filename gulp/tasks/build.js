var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config').watch;

// TODO: Tasks currently run out of order ? or something ? Clean isn't being run first. Find out why.

gulp.task('build', [/*'clean:dist', */'browserify', 'styles', 'html']);