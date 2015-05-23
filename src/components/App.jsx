const React = require('react');
const DisplayItem = require('./DisplayItem/DisplayItem.jsx');
const MaterialTransition = require('./MaterialTransition/MaterialTransition.jsx');

let App = React.createClass({

  getInitialState() {
    return {
      items: [
        {
          id: 0,
          title: 'In a Perfect World',
          subtitle: 'Kodaline',
          images: {
            bg: './images/dimg.png',
            display: './images/bg.jpg'
          },
          options: {
            double: true
          }
        },
        {
          id: 1,
          title: 'Supermodel',
          subtitle: 'Foster the People',
          images: {
            bg: '',
            display: ''
          }
        },
        {
          id: 2,
          title: 'Halcyon Days',
          subtitle: 'Ellie Goulding',
          images: {
            bg: '',
            display: ''
          }
        },
        {
          id: 3,
          title: 'Native',
          subtitle: 'One Republic',
          images: {
            bg: '',
            display: ''
          }
        },
        {
          id: 4,
          title: 'Comedown Mac...',
          subtitle: 'The Strokes',
          images: {
            bg: '',
            display: ''
          }
        },
        {
          id: 5,
          title: 'Pharrell Williams',
          subtitle: 'GIRL',
          images: {
            bg: './images/dimg.png',
            display: './images/bg.jpg'
          },
          options: {
            hideInfo: true,
            double: true,
            right: true
          }
        },
        {
          id: 6,
          title: 'a',
          subtitle: 'b',
          images: {
            bg: '',
            display: ''
          },
          options: {
            hideInfo: true
          }
        },
        {
          id: 7,
          title: 'a',
          subtitle: 'b',
          images: {
            bg: '',
            display: ''
          },
          options: {
            hideInfo: true
          }
        },        
        {
          id: 8,
          title: 'a',
          subtitle: 'b',
          images: {
            bg: '',
            display: ''
          },
          options: {
            hideInfo: true
          }
        },
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
