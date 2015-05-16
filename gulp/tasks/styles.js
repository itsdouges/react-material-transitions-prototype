var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var config = require('../config.js').app;
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

// TODO: Clean this task.

var lessConfig = {
    src: config.src + '/index.less',
    dest: config.dest + '/styles',
    options: [
      'bower_components',
      config.src
    ]
  };

var injectFiles = gulp.src([
	config.src + '/**/*.less',
  '!' + lessConfig.src], { 
  	read: false 
	});

var injectOptions = {
	transform: function(filePath) {
	  filePath = filePath.replace(config.src, '');
	  return '@import \'' + filePath + '\';';
	},
	starttag: '// injector',
	endtag: '// endinjector',
	addRootSlash: false
};

var indexFilter = $.filter('index.less');

var wiredepOptions = {
  directory: 'bower_components',
  exclude: [/jquery/]
};

// TODO: Move to main gulp file.
 function errorHandler(title) {
	return function(err) {
	  gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
	  this.emit('end');
	};
}

gulp.task('styles', function() {
	gulp
    .src(lessConfig.src)
    // .pipe(indexFilter)
    .pipe($.inject(injectFiles, injectOptions))
    // .pipe(indexFilter.restore())
    .pipe(wiredep(wiredepOptions))
    .pipe($.sourcemaps.init())
    .pipe(less(lessConfig.src)).on('error', errorHandler('Less'))
    .pipe($.autoprefixer()).on('error', errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(lessConfig.dest))
    .pipe(browserSync.reload({ stream: true }));
});