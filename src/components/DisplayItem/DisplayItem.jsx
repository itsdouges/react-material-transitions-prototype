const React = require('react');

let DisplayItem = React.createClass({

	render() {
		var className = "mt-display-item "; 
		className += this.props.options.display || "single";

		if (this.props.options.hideInfo) {
			className += " no-info";
		}

		return (
			<div 
			className={className}
			backgroundImage={this.props.images.display}>
				<span>{this.props.title}</span>
				<span>{this.props.subtitle}</span>
			</div>
		);
	}

}); 

module.exports = DisplayItem;