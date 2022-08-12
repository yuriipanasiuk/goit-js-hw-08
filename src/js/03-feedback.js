import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const currentFormValue = 'feedback-form-state';

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);

onDownload();

function onInput() {
  const emailValue = formRef.email.value;
  const messageValue = formRef.message.value;

  const formData = {
    email: emailValue,
    message: messageValue,
  };

  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem('currentFormValue', formDataJSON);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const email = formRef.email.value;
  const message = formRef.message.value;

  if (email === '' || message === '') {
    alert('input is empty');
    return;
  }

  const formData = {
    email: email,
    message: message,
  };

  localStorage.clear();

  console.log(formData);

  formRef.reset();
}

function onDownload() {
  const currentLocalStorage = localStorage.getItem('currentFormValue');
  const localStoragePARSE = JSON.parse(currentLocalStorage);
  if (!localStoragePARSE) {
    return;
  }
  formRef.email.value = localStoragePARSE.email;
  formRef.message.value = localStoragePARSE.message;
}
