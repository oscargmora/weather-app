import {
    formatDate,
    formatDayOfTheWeek,
    formatTime,
    createAndAppendElement,
    createAppendAndAddClassTemp,
    createAppendAndAddHiddenClassTemp
} from './format-and-create-elements';

const containerOne = document.querySelector('#container-one');
const containerTwo = document.querySelector('#container-two');
const containerThree = document.querySelector('#container-three');

function clearDOM() {
    containerOne.innerText = '';
    containerTwo.innerText = '';
    containerThree.innerText = '';
}

function loadDailyForecast(forecastDayData) {
    forecastDayData.forEach((day) => {
        createAndAppendElement(containerTwo, formatDayOfTheWeek(day.date));
        createAppendAndAddHiddenClassTemp(containerTwo, `${day.avgtemp_c}°C`);
        createAppendAndAddClassTemp(containerTwo, `${day.avgtemp_f}°F`);
        createAndAppendElement(containerTwo, `${day.rain} %`);
    });
}

function loadHourlyForecast(forecastHourlyData) {
    forecastHourlyData.forEach((day) => {
        day.forEach((hour) => {
            createAndAppendElement(containerThree, formatTime(hour.time));
            createAppendAndAddHiddenClassTemp(
                containerThree,
                `${hour.temp_c}°C`
            );
            createAppendAndAddClassTemp(containerThree, `${hour.temp_f}°F`);
            createAndAppendElement(containerThree, `${hour.chance_of_rain} %`);
        });
    });
}

function loadContainerOne(reducedWeatherData) {
    createAndAppendElement(containerOne, reducedWeatherData.name);
    createAndAppendElement(containerOne, formatDate(reducedWeatherData.time));
    createAndAppendElement(containerOne, formatTime(reducedWeatherData.time));
    createAndAppendElement(containerOne, reducedWeatherData.condition);
    createAppendAndAddHiddenClassTemp(
        containerOne,
        `${reducedWeatherData.temp_c}°C`
    );
    createAppendAndAddClassTemp(containerOne, `${reducedWeatherData.temp_f}°F`);
    createAppendAndAddHiddenClassTemp(
        containerOne,
        `${reducedWeatherData.feelslike_c}°C`
    );
    createAppendAndAddClassTemp(
        containerOne,
        `${reducedWeatherData.feelslike_f}°F`
    );
    createAndAppendElement(containerOne, `${reducedWeatherData.humidity} %`);
    createAppendAndAddHiddenClassTemp(
        containerOne,
        `${reducedWeatherData.wind_kph} KM/H`
    );
    createAppendAndAddClassTemp(
        containerOne,
        `${reducedWeatherData.wind_mph} MPH`
    );
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
