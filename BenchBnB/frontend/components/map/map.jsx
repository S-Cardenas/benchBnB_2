var React = require('react');
var BenchStore = require('../../stores/bench');

var _markers = [];

var MyMap = React.createClass({

	componentDidMount: function(){
      var mapDOMNode = this.refs.map;
      var mapOptions = {
        center: {lat: 40.708180, lng: -74.017338},
        zoom: 14
      };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);

			this.listener = BenchStore.addListener(this._onChange);
    },

	_onChange: function() {
		for (var i = 0; i < _markers.length; i++) {
			_markers[i].setMap(null);
		}

		_markers = [];

		BenchStore.all().forEach(function(bench) {
			this._placeBench(bench);
		}.bind(this));
	},

	_placeBench: function(bench) {
		var myLatLng = {
			lat: bench.lat,
			lng: bench.lng
		};

		var marker = new google.maps.Marker({
			position: myLatLng,
			title: bench.description
		});

		marker.setMap(this.map);
		bench.marker = marker;
		_markers.push(marker);
	},

  render: function() {

    return (
      <div className="map" ref="map">
      </div>
    );
  }
});


module.exports = MyMap;
