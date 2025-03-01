const formData = { email: '', message: '' };
const emailInp = document.querySelector('input[name="email"]');
const messageInp = document.querySelector('textarea[name="message"]');
const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', handlerOnLoad);
feedbackForm.addEventListener('input', handlerInput);
feedbackForm.addEventListener('submit', handlerSubmit);

function handlerOnLoad() {
  const savedData = localStorage.getItem(localStorageKey);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    emailInp.value = formData.email;
    messageInp.value = formData.message;
  }
}

function handlerInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function handlerSubmit(event) {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Please fill in all fields.');
    return;
  }

  console.log(formData);
  feedbackForm.reset();
  Object.keys(formData).forEach(key => (formData[key] = ''));
  localStorage.removeItem(localStorageKey);
}
