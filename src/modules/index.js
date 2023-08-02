import '../styles/meyer-reset.css';
import getForecast from './api-controller';

const formInput = document.querySelector('input[type="text"]');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    getForecast(formInput.value);
    formInput.value = '';
});

window.onload = () => {
    getForecast('Miami');
};
