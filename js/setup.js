'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var firstNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var randomElement = function (array) {
  return Math.floor(Math.random() * array.length);
};


var generateWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: firstNames[randomElement(firstNames)] + ' ' + lastNames[randomElement(lastNames)],
      coatColor: coatColors[randomElement(coatColors)],
      eyesColor: eyesColors[randomElement(eyesColors)],
    });
  }
  return wizards;
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

var wizards = generateWizards();

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

