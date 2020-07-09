'use strict';

(function () {
  window.coatColor = 'rgb(101, 137, 164)';
  window.eyesColor = 'black';
  window.fireballColor = '#ee4830';

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.eyesColor) {
      rank += 1;
    }
    return rank;
  };

  window.filter = {
    getRank: getRank,
  };
})();
