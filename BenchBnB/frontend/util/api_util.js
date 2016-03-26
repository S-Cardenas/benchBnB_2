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
  }
};

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
