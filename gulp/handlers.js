 var gutil = require('gulp-util');

 function errorHandler(title) {
	return function(err) {
	  gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
	  this.emit('end');
	};
}

module.exports = {
	error: errorHandler
};