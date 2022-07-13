import throttle from 'lodash.throttle';

const formItem = document.querySelector('.feedback-form');

const formObj = {};

const STORAGE_KEY = 'feedback-form-state';

const onFormSubmit = event => {
  event.preventDefault();
  //очищаю поля форми
  event.target.reset();

  localStorage.removeItem(STORAGE_KEY);
};

const onTextFields = event => {
  formObj[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formObj));
};

const populateFields = () => {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessage);

  if (savedMessage) {
    formItem.email.value = savedMessage.email || '';
    formItem.message.value = savedMessage.message || '';
  }
};
populateFields();

// const checkStorage = () => {
//   const formStorage =
//     localStorage.getItem(STORAGE_KEY) === null
//       ? undefined
//       : JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (!formStorage) return;

//   for (const key in formStorage) {
//     if (formStorage.hasOwnProperty(key)) {
//       formItem.elements[key].value = formStorage[key];
//       formObj[key] = formStorage[key];
//     }
//   }
// };
// checkStorage();

formItem.addEventListener('submit', onFormSubmit);
formItem.addEventListener('input', throttle(onTextFields, 500));
