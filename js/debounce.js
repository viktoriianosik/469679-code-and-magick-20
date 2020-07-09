'use strict';
(function () {
  var DEBOUNCE_INTERVAL = 500; // ms

  window.debounce = function (cb) {
    var lastTimeout = null;
    var settingTimeout = function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
    settingTimeout(cb);
  };
})();
