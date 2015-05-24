const React = require('react');
const PyCalc = require('../../helpers/PythagorasCalculator.js');
const TweenState = require('react-tween-state');

const BASE_TRANSITION_SPEED = 500;

let TransitionExpander = React.createClass({
	mixins: [TweenState.Mixin],

	componentDidMount() {
		this.tweenState('scale', {
			easing: TweenState.easingTypes.easeOutQuad,
			duration: BASE_TRANSITION_SPEED,
			endValue: this.props.options.scale.end,
			onEnd: this.onEnd
		});
	},

	onEnd() {
		this.props.onExpanded();

		this.tweenState('opacity', {
				duration: BASE_TRANSITION_SPEED * 2,
				endValue: 0,
				onEnd: this.finishedAnimating
		});
	},

	finishedAnimating() {
		this.props.onFinishedAnimating();
	},

	getInitialState() {
		return {
			scale: this.props.options.scale.start,
			opacity: 1
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
			opacity: this.getTweeningValue('opacity'),
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