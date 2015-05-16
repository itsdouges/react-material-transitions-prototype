const React = require('react');
const DisplayItem = require('../DisplayItem/DisplayItem.jsx');

let MaterialTransition = React.createClass({

	render() {
		let items = this.props.items;

		return (
      <div className="container">
        {items.map(item =>
          <DisplayItem 
        		key={item.id} 
						title={item.title}
						subtitle={item.subtitle}
						images={item.images}
						options={item.options} />
        )}
      </div>
		);
	}

});

module.exports = MaterialTransition;