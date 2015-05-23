const React = require('react');
const PyCalc = require('../../helpers/PythagorasCalculator.js');
const TweenState = require('react-tween-state');

let TransitionExpander = React.createClass({
	mixins: [TweenState.Mixin],

	componentDidMount() {
		this.tweenState('scale', {
			easing: TweenState.easingTypes.easeInOutQuad,
			duration: 500,
			endValue: this.props.options.scale.end
		});
	},

	getInitialState() {
		return {
			scale: this.props.options.scale.start
		};
	},

	render() {
		let options = this.props.options;
		let fillSize = PyCalc.calc(options.diameter);
		let className = 'mt-expander';

		if (options.expanded) {
			className += ' expanded';
		}

		let styles = {
			width: options.diameter,
			height: options.diameter,
			top: options.offset.y,
			left: options.offset.x,
			transform: 'scale(' + this.getTweeningValue('scale') + ')'
		};

		return (
			<div className="mt-expander-container">
				<div 
					style={styles} 
					className={className} />
			</div>
		);
	}
});

module.exports = TransitionExpander;