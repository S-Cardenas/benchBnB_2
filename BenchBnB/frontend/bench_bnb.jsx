var React = require('react');
var ReactDOM = require('react-dom');
var BenchesIndex = require('./components/benches/index.jsx');
var App = require('./components/app/app.jsx');
var Search = require('./components/search/search.jsx');
var Map = require('./components/map/map.jsx');


var _app = (
	<App>
		<Search>
			<Map />
			<BenchesIndex />
		</Search>
	</App>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
		_app,
    document.getElementById('content')
  );
});
