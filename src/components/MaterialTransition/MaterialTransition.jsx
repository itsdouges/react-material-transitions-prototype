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
				animating: false,
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
				animating: true,
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

	finishedExpanding() {
		let state = this.state;
		state.expander.expanded = true

		this.setState(state);
	},

	finishedAnimating() {
		let state = this.state;
		state.expander.animating = false;

		this.setState(state);
	},

	render() {
		let items;
		let expander;
		let content;

		if (!this.state.expander.expanded) {
			items = this.props.items.map((item, i) =>
				<DisplayItem 
					onClick={this.onItemClick}
					key={i} 
					title={item.title}
					subtitle={item.subtitle}
					images={item.images}
					options={item.options} />
			);
		} else {
			content = <div></div>; 
		}

		if (this.state.expander.animating) {
			expander = <TransitionExpander 
									options={this.state.expander}
									onExpanded={this.finishedExpanding}
									onFinishedAnimating={this.finishedAnimating} />;
		}

		return (
      <div className="container">
        {items}
        <div style={{clear:'both'}} />
        {expander}
      </div>
		);
	}

});

module.exports = MaterialTransition;