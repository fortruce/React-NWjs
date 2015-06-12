var React = require('react');

var HelloWorld = React.createClass({
  render() {
    return (
      <div>Hello World!</div>
    );
  }
});

React.render(<HelloWorld/>,
             document.getElementById('container'));