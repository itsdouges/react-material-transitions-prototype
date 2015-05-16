const React = require('react');

let DisplayItem = React.createClass({

	render() {
		return (
			<div 
			className={
				this.props.options.display ? 
				"mt-display-item " +  this.props.options.display : 
				"mt-display-item single"
			} 

			backgroundImage={this.props.images.display}>
				<span>{this.props.title}</span>
				<span>{this.props.subtitle}</span>
			</div>
		);
	}

}); 

module.exports = DisplayItem;