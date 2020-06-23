'use strict';

(function () {
  var setuprWizard = document.querySelector('.setup-wizard ');
  var wizardCoat = setuprWizard.querySelector('.wizard-coat');
  var wizardEyes = setuprWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var inputCoat = document.querySelector('input[name=coat-color]');
  var inputEyes = document.querySelector('input[name=eyes-color]');
  var inputFireball = document.querySelector('input[name=fireball-color]');

  var onChangeColor = function (input, colorArray, blockChange, colorProperty) {
    var currentColor = colorArray[window.setup.randomElement(colorArray)];
    blockChange.style[colorProperty] = currentColor;
    input.value = currentColor;
  };

  wizardCoat.addEventListener('click', function () {
    onChangeColor(inputCoat, window.setup.coatColors, wizardCoat, 'fill');
  });

  wizardEyes.addEventListener('click', function () {
    onChangeColor(inputEyes, window.setup.eyesColors, wizardEyes, 'fill');
  });

  wizardFireball.addEventListener('click', function () {
    onChangeColor(inputFireball, window.setup.fireballColors, wizardFireball, 'backgroundColor');
  });
})();
