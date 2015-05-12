const React = require('react');
const TodoStore = require('../flux/stores/TodoStore');
const ActionCreator = require('../flux/actions/TodoActionCreators');
const TaskList = require('./TaskList.jsx');
const DisplayItem = require('./DisplayItem/DisplayItem.jsx');

let App = React.createClass({

  getInitialState() {
    return {
      tasks: [],
      items: [
        "swag",
        "swish"
      ]
    }
  },

  _onChange() {
    this.setState(TodoStore.getAll());
  },

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },

  handleAddNewClick(e) {
    let title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClearListClick(e) {
    ActionCreator.clearList();
  },

  render() {
    let tasks = this.state.tasks;
    let items = this.state.items;

    return (
      <div>
        <h1>mt-transition example</h1>

        <div className="container">
          {items.map(item =>
            <DisplayItem />
          )}
        </div>
        
        <TaskList tasks={tasks} />

        <button onClick={this.handleAddNewClick}>Add New</button>
        <button onClick={this.handleClearListClick}>Clear List</button>
      </div>
    );
  }

});

module.exports = App;
