var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config').app;

// Pattern matching helper:
// ./folder, targets folder
// ./folder/**/* targets all folders/files in a folder

gulp.task('clean:dist', function (cb) {
	return gulp
					.src(config.dist)
					.pipe(clean());
});