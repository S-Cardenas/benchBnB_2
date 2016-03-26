var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../../stores/bench.js');
var ApiUtil = require('../../util/api_util.js');


var BenchIndex = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  _onChange: function() {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function() {
    this.benchListener = BenchStore.addListener(this._onChange);

    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function() {
    this.benchListener.remove();
  },

  render: function () {
    var myBenches = this.state.benches.map(function(bench, i) {
      return <li key={i}>
              {bench.description}
            </li>;
    }.bind(this));

    return (
      <ul>
        {myBenches}
      </ul>
    );
  }

});


module.exports = BenchIndex;
