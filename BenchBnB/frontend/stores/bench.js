var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/bench_constants');

var _benches = [];

var reset_benches = function(benches) {
  _benches = benches;
};

BenchStore.all = function () {
  return _benches.slice(0);
};

BenchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      reset_benches(payload.benches);
      BenchStore.__emitChange();
      break;
  }
};

// window.BenchStore = BenchStore;

module.exports = BenchStore;
