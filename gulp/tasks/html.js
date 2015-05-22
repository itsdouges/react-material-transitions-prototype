var gulp = require('gulp');
var config = require('../config').app;

var htmlConfig = {
  src: config.src + 'index.html',
  dest: config.dest
};

gulp.task('html', function() {
  return gulp
  	.src(htmlConfig.src)
    .pipe(gulp.dest(htmlConfig.dest));
});
