var React = require('react');
var ReactDOM = require('react-dom');

var BenchForm = React.createClass({
  render: function() {
    return (
      <div className="bench-form">
        <form action="#" method="#">
          <label>
            Latitude
            <input type="text" name="bench[lat]"/>
          </label>
          <label>
            Longitude
            <input type="text" name="bench[lng]"/>
          </label>
          <label>
            Description
            <input type="text" name="bench[description]"/>
          </label>

          <input type="submit" value="SUBMIT!!"/>
        </form>
      </div>
    );
  }
});


module.exports = BenchForm;
