const React = require('react');
const TweenState = require('react-tween-state');

let Content = React.createClass({
	mixins: [TweenState.Mixin],

	componentDidMount() {
		this.tweenState('x', {
			easing: TweenState.easingTypes.easeInOutQuad,
			duration: 1000,
			endValue: 0,
			delay: 100
		});

		this.tweenState('y', {
			easing: TweenState.easingTypes.easeInOutQuad,
			duration: 1000,
			endValue: 0,
			delay: 100
		});

		this.tweenState('clipRight', {
			easing: TweenState.easingTypes.easeInOutQuad,
			duration: 500,
			endValue: 1500,
			delay: 500
		});

		this.tweenState('clipBottom', {
			easing: TweenState.easingTypes.easeInOutQuad,
			duration: 500,
			endValue: 1500,
			delay: 500
		});

		this.tweenState('width', {
			easing: TweenState.easingTypes.easeInOutQuad,
			duration: 500,
			endValue: 1500,
			delay: 500
		});
	},

	getInitialState() {
		return {
			x: this.props.options.initialLocation.x,
			y: this.props.options.initialLocation.y,
			animating: this.props.options.animating,
			clipRight: this.props.options.initialSize.width,
			clipBottom: this.props.options.initialSize.height,
			width: this.props.options.initialSize.width,
			height: this.props.options.initialSize.height
		};
	},

	render() {
		let containerStyle = {
			clip: 'rect(0 ' + this.getTweeningValue('clipRight') + 'px ' + 
				this.getTweeningValue('clipBottom') + 'px 0)',
			transform: 'translate3d(' + this.getTweeningValue('x') + 'px, ' + 
				this.getTweeningValue('y') + 'px, 0)'
		};

		let imageStyle = {
			width: this.getTweeningValue('width'),
			height: this.getTweeningValue('height')
		};

		return (
			<div className="mt-content"
				style={containerStyle}>
				<div className="mt-content-titlebar">
					<div className="mt-content-display"
						style={imageStyle} />

					<div className="mt-content-title-container">
						<div className="mt-content-title">
							G I R L
						</div>

						<div className="mt-content-subtitle">
							Pharrell Williams
						</div>
					</div>

					<div className="mt-content-date">
						Released March, 2013
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Content;