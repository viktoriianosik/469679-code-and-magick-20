'use strict';

(function () {
  var setuprWizard = document.querySelector('.setup-wizard ');
  var wizardCoat = setuprWizard.querySelector('.wizard-coat');
  var wizardEyes = setuprWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var inputCoat = document.querySelector('input[name=coat-color]');
  var inputEyes = document.querySelector('input[name=eyes-color]');
  var inputFireball = document.querySelector('input[name=fireball-color]');
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var randomElement = function (array) {
    return Math.floor(Math.random() * array.length);
  };

  var onChangeColor = function (input, colorArray, blockChange, colorProperty) {
    var currentColor = colorArray[randomElement(colorArray)];
    blockChange.style[colorProperty] = currentColor;
    input.value = currentColor;
  };

  wizardCoat.addEventListener('click', function () {
    onChangeColor(inputCoat, coatColors, wizardCoat, 'fill');
  });

  wizardEyes.addEventListener('click', function () {
    onChangeColor(inputEyes, eyesColors, wizardEyes, 'fill');
  });

  wizardFireball.addEventListener('click', function () {
    onChangeColor(inputFireball, fireballColors, wizardFireball, 'backgroundColor');
  });
})();
