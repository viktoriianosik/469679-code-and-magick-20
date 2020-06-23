'use strict';

(function () {

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.setup.querySelector('.setup-close');
  var setupUserName = window.setup.setup.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    window.setup.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setup.setup.classList.add('hidden');
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
})();
