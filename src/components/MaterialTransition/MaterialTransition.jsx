const React = require('react');
const DisplayItem = require('../DisplayItem/DisplayItem.jsx');
const TransitionExpander = require('../TransitionExpander/TransitionExpander.jsx');
const PyCalc = require('../../helpers/PythagorasCalculator.js');
const Window = require('../../helpers/WindowHelper.js');
const Content = require('../Content/Content.jsx');

let MaterialTransition = React.createClass({
	
	getInitialState() {
		return {
			expander: {
				offset: {},
				scale: {}
			}
		};
	},

	onItemClick(e) {
		let test = window.getComputedStyle(React.findDOMNode(this));

		console.log(test.marginLeft);
		console.log(test.marginRight);

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

		var mLeft = test.marginLeft.slice(0, -2);

		console.log(mLeft);

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
			},
			content: {
				initialSize: {
					width: domElement.offsetWidth,
					height: domElement.offsetHeight
				},
				initialLocation: {
					x: elementClientRect.left - mLeft,
					y: elementClientRect.top - 303
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
		let spacer;

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
		}

		if (this.state.expander.animating || this.state.expander.expanded) {
			content = <Content 
									options={this.state.content} />;

			spacer = <div className="mt-content-spacer"></div>;
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
        {spacer}
        {content}
        <div style={{clear:'both'}} />
        {expander}
      </div>
		);
	}

});

module.exports = MaterialTransition;