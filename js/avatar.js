'use strict';

(function () {
  var input = document.querySelector('.upload input[type=file]');
  var img = document.querySelector('.setup-user-pic');
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];


  var changeAvatar = function () {
    var file = input.files[0];
    var fileName = file.name.toLowerCase();
    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        img.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  };

  input.addEventListener('change', function () {
    changeAvatar();
  });
})();
