var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <ul className="header-list">
          <li>
            <h1 className="main-title">BenchBnB</h1>
          </li>
          <ul className="nav-bar">
            <li>
              Become a Host
            </li>
            <li>
              Sign Up
            </li>
            <li>
              Log In
            </li>
          </ul>
        </ul>
        { this.props.children }
      </div>
    );
  }
});

module.exports = App;
