const PyCalc = require('./PythagorasCalculator.js');

function calcWindowCentrePoints() {
	return {
		x: window.innerWidth / 2,
		y: window.innerHeight /2
	};
}

function calcDomElementCentrePointInWindow(element) {
	let elementClientRect = element.getBoundingClientRect();

	return {
		x: element.offsetWidth / 2 + elementClientRect.left,
		y: element.offsetHeight / 2 + elementClientRect.top
	};
}

function calcElementOffset(element) {
	let wPoints = calcWindowCentrePoints();
	let ePoints = calcDomElementCentrePointInWindow(element);

	return {
		x: Math.ceil(wPoints.x - ePoints.x),
		y: Math.ceil(wPoints.y - ePoints.y)
	};
}

function calcWindowDiagonal() {
	return PyCalc.calc(window.innerWidth, window.innerHeight);
}

module.exports = {
	calcWindowCentrePoints: calcWindowCentrePoints,
	calcDomElementCentrePointInWindow: calcDomElementCentrePointInWindow,
	calcElementOffset: calcElementOffset,
	calcWindowDiagonal: calcWindowDiagonal
}