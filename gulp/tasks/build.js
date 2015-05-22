var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config').watch;
var runSequence = require('run-sequence');

// https://www.npmjs.com/package/run-sequence
// run-sequence being used to correctly order tasks.

gulp.task('build', function (callback) {
	runSequence(
		//'clean:dist', 
		['javascript', 'styles', 'html', 'images'],
		callback
	);
});