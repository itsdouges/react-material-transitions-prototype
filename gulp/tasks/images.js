var gulp = require('gulp');
var config = require('../config').app;
var rename = require('gulp-rename');

var imagesConfig = {
  src: config.src + '**/*.{ttf,woff,eof,svg,png,jpg,jpeg}',
  dest: config.dest + 'images/'
};

gulp.task('images', function() {
  
  return gulp
  	// Gathers the source files based on the input pattern.
  	.src(imagesConfig.src)

  	// Used to flatten the directory.
  	.pipe(rename({dirname: ''}))

  	// Pipes to the destination folder.
    .pipe(gulp.dest(imagesConfig.dest));
    
});
