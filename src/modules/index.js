import '../styles/meyer-reset.css';
import '../styles/data-styling.css';
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

let isFahrenheit = true;
let isDaily = true;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    getForecast(formInput.value);
    formInput.value = '';

    if (fahrenheitCelsiusButton.textContent === 'Imperial') {
        const temperatureElements = Array.from(
            document.querySelectorAll('.temp')
        );
        temperatureElements.forEach((element) => {
            if (element.classList.contains('hidden-temp')) {
                element.classList.remove('hidden-temp');
            }
        });
    }
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

window.onload = () => {
    getForecast('Miami');
};
