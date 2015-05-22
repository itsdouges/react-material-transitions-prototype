var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var config = require('../config.js').app;
var handlers = require('../handlers.js');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var gutil = require('gulp-util');

var LESS_FILE_NAME = 'index.less';

var lessConfig = {
    src: config.src + LESS_FILE_NAME,
    dest: config.dest + 'styles',
    options: [
      'bower_components',
      config.src
    ]
  };

var wiredepOptions = {
  directory: 'bower_components'
};

gulp.task('styles', function() {
  var indexFilter = $.filter(LESS_FILE_NAME);

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace(config.src, '');
      return '@import \'' + filePath + '\';';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  var injectFiles = gulp.src([
    config.src + '/**/*.less',
    '!' + lessConfig.src], { 
      read: false 
  });

	return gulp
    .src(lessConfig.src)
    .pipe(indexFilter).on('error', handlers.error('index-filter'))
    .pipe($.inject(injectFiles, injectOptions)).on('error', handlers.error('inject-less'))
    .pipe(indexFilter.restore()).on('error', handlers.error('index-filter-restore'))
    .pipe(wiredep(wiredepOptions))
    .pipe($.sourcemaps.init())
    .pipe(less(lessConfig.src)).on('error', handlers.error('Less'))
    .pipe($.autoprefixer()).on('error', handlers.error('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(lessConfig.dest))
    .pipe(browserSync.reload({ stream: true }));
});