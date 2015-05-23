const React = require('react');
const DisplayItem = require('../DisplayItem/DisplayItem.jsx');
const TransitionExpander = require('../TransitionExpander/TransitionExpander.jsx');
const PyCalc = require('../../helpers/PythagorasCalculator.js');
const Window = require('../../helpers/WindowHelper.js');

let MaterialTransition = React.createClass({
	
	getInitialState() {
		return {
			expander: {
				expanded: false,
				offset: {
					x: 0,
					y: 0
				},
				width: 0,
				height: 0,
				scale: {
					initial: 0,
					final: 0
				}
			}
		};
	},

	onItemClick(e) {
		let domElement = e.target;
		let elementClientRect = domElement.getBoundingClientRect();

		let diameter = domElement.offsetWidth > domElement.offsetHeight ? 
			{	small: domElement.offsetHeight, big: domElement.offsetWidth } :
			{ small: domElement.offsetWidth, big: domElement.offsetHeight };

		let extraYOffset = (diameter.big - diameter.small) / 2;
		let scaleStart = PyCalc.calc(domElement.offsetWidth, domElement.offsetHeight) / diameter.small;
		
		let ePoint = Window.calcDomElementCentrePointInWindow(domElement);
		let wPoint = Window.calcWindowCentrePoints();
		let x = wPoint.x - ePoint.x;
		let y = wPoint.y - ePoint.y;

		let extra = PyCalc.calc(x, y) * 2;
		let scaleEnd = Math.ceil((Window.calcWindowDiagonal() + extra) / diameter.small);

		this.setState({
			expander: {
				expanded: true,
				diameter: diameter.small,
				offset: {
					x: elementClientRect.left,
					y: elementClientRect.top + extraYOffset
				},
				scale: {
					start: scaleStart,
					end: scaleEnd
				}
			}
		});
	},

	render() {
		let items = this.props.items;
		let expander = this.state.expander.expanded ? 
		<TransitionExpander options={this.state.expander} /> : '';

		return (
      <div className="container">
        {items.map((item, i) =>
          <DisplayItem 
          	onClick={this.onItemClick}
        		key={i} 
						title={item.title}
						subtitle={item.subtitle}
						images={item.images}
						options={item.options} />
        )}
        
        <div style={{clear:'both'}} />

        {expander}
      </div>
		);
	}

});

module.exports = MaterialTransition;