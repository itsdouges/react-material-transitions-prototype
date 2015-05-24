const React = require('react');

let Content = React.createClass({
	getInitialState() {
		return {
			content: {
				clip: {
					right: this.props.options.initialSize.width,
					bottom: this.props.options.initialSize.height
				},
				offset: this.props.options.initialLocation
			},
			image: this.props.options.initialSize
		};
	},

	render() {
		let containerStyle = {
			clip: 'rect(0 ' + this.state.content.clip.right + 'px ' + 
				this.state.content.clip.bottom + 'px 0)',
			transform: 'translate3d(' + this.state.content.offset.x + 'px, ' + 
				this.state.content.offset.y + 'px, 0)'
		};

		let imageStyle = {
			width: this.state.image.width,
			height: this.state.image.height
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