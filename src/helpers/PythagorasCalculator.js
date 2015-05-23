// PythagorasCalculator.js

/**
 * Calculates the diagonal length of an input width/height.
 * @param  {[type]} width  [description]
 * @param  {[type]} height [description]
 * @return {[type]}        [description]
 */
function calc(width, height) {
	if (!width) {
		return 0;
	}

	if (!height) {
		height = width;
	}

	let x2 = Math.pow(width, 2);
	let y2 = Math.pow(height, 2);

	var diagonal = Math.sqrt((x2 + y2));
	return Math.ceil(diagonal);
}

module.exports = {
	calc: calc
};