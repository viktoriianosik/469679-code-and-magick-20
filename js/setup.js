'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var firstNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


var randomElement = function (array) {
  return Math.floor(Math.random() * array.length);
};

var wizards = [];

var generateWizards = function () {
  for (var i = 0; i < 4; i++) {
    var wizard = {
      name: firstNames[randomElement(firstNames)] + ' ' + lastNames[randomElement(lastNames)],
      coatColor: coatColors[randomElement(coatColors)],
      eyesColor: eyesColors[randomElement(eyesColors)],
    };
    wizards.push(wizard);
  }
};

var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (el) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = el.name;
  wizardElement.querySelector('.wizard-coat').style.fill = el.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = el.eyesColor;
  return wizardElement;
};

generateWizards();

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);


var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

setupUserName.addEventListener('focus', function () {
  setupUserName.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      document.removeEventListener('keydown', onPopupEscPress);
    }
  });
}, true);

setupUserName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
}, true);


var setuprWizard = document.querySelector('.setup-wizard ');
var wizardCoat = setuprWizard.querySelector('.wizard-coat');
var wizardEyes = setuprWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var inputCoat = document.querySelector('input[name=coat-color]');
var inputEyes = document.querySelector('input[name=eyes-color]');
var inputFireball = document.querySelector('input[name=fireball-color]');

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
