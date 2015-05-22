var gulp = require('gulp');
var runSequence = require('run-sequence');

// run-sequence being used to correctly order tasks.

gulp.task('default', function(callback) {
	runSequence(
		'build',
		['watch', 'server'], 
		callback
	);
});