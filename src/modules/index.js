import '../styles/meyer-reset.css';
import '../styles/error.css';
import '../styles/stagnant-html.css';
import '../styles/container-one.css';
import '../styles/container-two.css';
import '../styles/container-three.css';
import getForecast from './api-controller';
import {
    switchTemperatureMeasurement,
    switchTimeMeasurement
} from './data-switcher';

const formInput = document.querySelector('input[type="text"]');
const submitButton = document.querySelector('button[type="submit"]');
const fahrenheitCelsiusButton = document.querySelector(
    '#fahrenheit-celsius-button'
);
const dailyHourlyButton = document.querySelector('#daily-hourly-button');
const overlay = document.querySelector('.overlay');

let isFahrenheit = true;
let isDaily = true;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    getForecast(formInput.value);
    formInput.value = '';
});

fahrenheitCelsiusButton.addEventListener('click', () => {
    switchTemperatureMeasurement();
    isFahrenheit = !isFahrenheit;
    if (isFahrenheit) {
        fahrenheitCelsiusButton.innerText = 'Metric';
    } else {
        fahrenheitCelsiusButton.innerText = 'Imperial';
    }
});

dailyHourlyButton.addEventListener('click', () => {
    switchTimeMeasurement();
    isDaily = !isDaily;
    if (isDaily) {
        dailyHourlyButton.innerText = 'Hourly';
    } else {
        dailyHourlyButton.innerText = 'Daily';
    }
});

window.onclick = (event) => {
    if (event.target === overlay) {
        overlay.classList.remove('active');
    }
};

window.onload = () => {
    getForecast('Miami');
};
