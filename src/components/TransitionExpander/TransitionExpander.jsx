const React = require('react');
const PyCalc = require('../../helpers/PythagorasCalculator.js');
const TweenState = require('react-tween-state');

let TransitionExpander = React.createClass({
	mixins: [TweenState.Mixin],

	componentDidMount() {
		this.tweenState('scale', {
			easing: TweenState.easingTypes.easeOutQuad,
			duration: 500,
			endValue: this.props.options.scale.end,
			onEnd: this.onEnd
		});
	},

	onEnd() {
		this.tweenState('opacity', {
				duration: 500,
				endValue: 0
		});
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