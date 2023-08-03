import {
    formatDate,
    formatDayOfTheWeek,
    formatTime,
    createAndAppendElement
} from './format-and-create-elements';

const containerOne = document.querySelector('#container-one');
const containerTwo = document.querySelector('#container-two');

function clearDOM() {
    containerOne.innerHTML = '';
    containerTwo.innerHTML = '';
}

function loadDailyForecast(forecastDayData) {
    forecastDayData.forEach((day) => {
        createAndAppendElement(containerTwo, formatDayOfTheWeek(day.date));
        createAndAppendElement(containerTwo, `${day.avgtemp_c}°C`);
        createAndAppendElement(containerTwo, `${day.avgtemp_f}°F`);
        createAndAppendElement(containerTwo, `${day.rain} %`);
    });
}

function loadHourlyForecast(forecastHourlyData) {
    forecastHourlyData.forEach((day) => {
        day.forEach((hour) => {
            createAndAppendElement(containerTwo, formatTime(hour.time));
            createAndAppendElement(containerTwo, `${hour.temp_c}°C`);
            createAndAppendElement(containerTwo, `${hour.temp_f}°F`);
            createAndAppendElement(containerTwo, `${hour.chance_of_rain} %`);
        });
    });
}

function loadContainerOne(reducedWeatherData) {
    createAndAppendElement(containerOne, reducedWeatherData.name);
    createAndAppendElement(containerOne, formatDate(reducedWeatherData.time));
    createAndAppendElement(containerOne, formatTime(reducedWeatherData.time));
    createAndAppendElement(containerOne, reducedWeatherData.condition);
    createAndAppendElement(containerOne, `${reducedWeatherData.temp_c}°C`);
    createAndAppendElement(containerOne, `${reducedWeatherData.temp_f}°F`);
    createAndAppendElement(containerOne, `${reducedWeatherData.feelslike_c}°C`);
    createAndAppendElement(containerOne, `${reducedWeatherData.feelslike_f}°F`);
    createAndAppendElement(containerOne, `${reducedWeatherData.humidity} %`);
    createAndAppendElement(containerOne, `${reducedWeatherData.wind_kph} KM/H`);
    createAndAppendElement(containerOne, `${reducedWeatherData.wind_mph} MPH`);
}

function loadContainerTwo(reducedWeatherData) {
    createAndAppendElement(
        containerTwo,
        `Sunrise: ${reducedWeatherData.forecastDay[0].sunrise}`
    );
    createAndAppendElement(
        containerTwo,
        `Sunset: ${reducedWeatherData.forecastDay[0].sunset}`
    );

    loadDailyForecast(reducedWeatherData.forecastDay);

    loadHourlyForecast(reducedWeatherData.forecastHourly);
}

function loadDOM(reducedWeatherData) {
    clearDOM();
    loadContainerOne(reducedWeatherData);
    loadContainerTwo(reducedWeatherData);
}

export default loadDOM;
