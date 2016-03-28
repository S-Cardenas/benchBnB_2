var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {

  fetchBenches: function() {
    $.ajax({
      type: "GET",
      dataType: "JSON",
      url: "api/benches",
      success: function(benches) {
        ApiActions.receiveAll(benches);
      },
      error: function() {
        console.log("didn't find the benches");
      }
    });
  },

  fetchInBounds: function(bounds) {
    $.ajax({
      type: "GET",
      dataTYPE: "JSON",
      url: "api/benches",
      data: this._queryString(bounds),
      success: function(benches) {
        ApiActions.receiveAll(benches);
      },
      error: function() {
        console.log("didn't make it");
      }
    });
  },

  _queryString: function(bounds) {
    return "ne_lat=" + bounds.getNorthEast().lat() +
    "&ne_lng=" + bounds.getNorthEast().lng() +
    "&sw_lat=" + bounds.getSouthWest().lat() +
    "&sw_lng=" + bounds.getSouthWest().lng();
  }
};

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
