const React = require('react');
const TodoStore = require('../flux/stores/TodoStore');
const ActionCreator = require('../flux/actions/TodoActionCreators');
const TaskList = require('./TaskList.jsx');
const DisplayItem = require('./DisplayItem/DisplayItem.jsx');
const MaterialTransition = require('./MaterialTransition/MaterialTransition.jsx');

let App = React.createClass({

  getInitialState() {
    return {
      items: [
        {
          id: 0,
          title: "In a Perfect World",
          subtitle: "Kodaline",
          images: {
            bg: "./images/dimg.png",
            display: "./images/bg.jpg"
          },
          options: {
            display: "double"
          }
        },
        {
          id: 2,
          title: "Pharrell Williams",
          subtitle: "GIRL",
          images: {
            bg: "./images/dimg.png",
            display: "./images/bg.jpg"
          },
          options: {
            hideInfo: true
          }
        }
      ]
    }
  },

  render() {
    let items = this.state.items;
    let options = this.state.options;

    return (
      <MaterialTransition items={items} options={options} />
    );
  }

});

module.exports = App;
