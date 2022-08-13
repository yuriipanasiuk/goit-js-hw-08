import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);

onDownloadPage();

const formData = {};

function onInput() {
  formData.email = formRef.email.value;
  formData.message = formRef.message.value;

  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(FORM_KEY, formDataJSON);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);

  evt.currentTarget.reset();

  localStorage.removeItem(FORM_KEY);
}

function onDownloadPage() {
  const currentLocalStorage = localStorage.getItem(FORM_KEY);
  const localStoragePARSE = JSON.parse(currentLocalStorage);

  if (!localStoragePARSE) {
    return;
  }

  formRef.email.value = localStoragePARSE.email;
  formRef.message.value = localStoragePARSE.message;
}
