const React = require('react');
const Window = require('../../helpers/WindowHelper.js');

let DisplayItem = React.createClass({

	render() {
		var options = this.props.options || {};
		var className = 'mt-display-item ' + (options.double ? 'double-double' : 'single'); 
		var favourite = options.favourite || false;

		if (options.hideInfo) {
			className += ' no-info';
		}

		if (options.right) {
			className += ' right';
		}

		return (
			<div 
				className={ className }
				backgroundImage={ options.display }
				onClick={ this.props.onClick }>
				<div className="mt-info">
					<span className="mt-title">{ this.props.title }</span>
					<span className="mt-subtitle">{ this.props.subtitle }</span>
					<span className="mt-favourite">{ favourite.toString() }</span>
				</div>
			</div>
		);
	}

}); 

module.exports = DisplayItem;