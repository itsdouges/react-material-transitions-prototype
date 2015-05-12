var gulp = require('gulp');
var del = require('del');
var config = require('../config').app;

// Pattern matching helper:
// ./folder, targets folder
// ./folder/**/* targets all folders/files in a folder

gulp.task('clean:dist', function (cb) {
	del([
		config.dest
		], cb);
});