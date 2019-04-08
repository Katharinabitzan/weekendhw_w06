document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript has loaded');

  const newItemForm = document.querySelector('#form');
  newItemForm.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all-button');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

});

const handleFormSubmit = function (evt) {
  evt.preventDefault();

  const newAnimal = createAnimalList(evt.target);
  const animalList = document.querySelector('#animal-list');
  animalList.appendChild(newAnimal);

  event.target.reset()
}

const createAnimalList = function (form) {
  const animalList = document.createElement('li');

  const species = document.createElement('h3');
  species.textContent = form.species.value;
  animalList.appendChild(species);

  const status = document.createElement('h4');
  status.textContent = form.status.value;
  animalList.appendChild(status);

  const date = document.createElement('h4');
  date.textContent = form.date.value;
  animalList.appendChild(date);

  return animalList;
};

const handleDeleteAllClick = function (event) {
  const animalList = document.querySelector('#animal-list');
  animalList.innerHTML = '';
}
