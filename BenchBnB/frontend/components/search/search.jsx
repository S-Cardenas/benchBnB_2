var React = require('react');
var BenchesIndex = require('../benches/index.jsx');
var Map = require('../map/map.jsx');
var BenchForm = require('../form/bench_form.jsx');

var Search = React.createClass({
	render: function() {
		return (
			<div className="search">
        <Map />
        <BenchesIndex />
        <BenchForm />
				{this.props.children}
			</div>
		);
	}

});


module.exports = Search;
