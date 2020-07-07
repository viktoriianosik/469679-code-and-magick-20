'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
  var wizards = [];


  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (el) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = el.name;
    wizardElement.querySelector('.wizard-coat').style.fill = el.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = el.colorEyes;
    return wizardElement;
  };

  var updateWizards = function () {
    render(wizards.slice().sort(function (left, right) {
      var rankDiff = window.filter.getRank(right) - window.filter.getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  var render = function (data) {
    var fragment = document.createDocumentFragment();
    similarListElement.innerHTML = '';
    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var onLoadSucess = function (data) {
    wizards = data;
    updateWizards();
  };

  var onLoadError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onLoadSucess, onLoadError);

  var form = setup.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, onLoadError);
    evt.preventDefault();
  });

  window.setup = {
    updateWizards: updateWizards,
  };
})();

