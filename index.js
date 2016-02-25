(function(){

  'use strict';

  var addButton = document.getElementById('js-button-add'),
      addButtonDiv = document.getElementById('js-button-div-add');

  var removeButton = document.getElementById('js-button-remove'),
      removeButtonDiv = document.getElementById('js-button-div-remove');

  var checkbox = document.getElementById('js-checkbox'),
      checkboxLabel = document.getElementById('js-checkbox-label'),
      checkboxState = document.getElementById('js-checkbox-state');

  addButton.addEventListener('click', function(event) {
    addButtonDiv.classList.add('change');
  }, false);

  removeButton.addEventListener('click', function(event) {
    removeButtonDiv.classList.remove('change');
  }, false);

  checkbox.addEventListener('change', function(event) {
    checkboxLabel.classList.toggle('toggle');
    checkboxState.innerHTML = checkboxLabel.classList.contains('toggle');
  }, false);

}());
