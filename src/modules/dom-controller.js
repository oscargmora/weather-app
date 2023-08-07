import {
    formatDate,
    formatDayOfTheWeek,
    formatTime,
    createAndAppendElement,
    createAndAppendElementWithIcon,
    createAppendAndAddClassTemp,
    createAppendAndAddHiddenClassTemp
} from './format-and-create-elements';
import backgroundUpdater from './style-controller';

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
        createAndAppendElementWithIcon(
            containerTwo,
            'day-of-the-week',
            formatDayOfTheWeek(day.date),
            day.icon
        );
        createAppendAndAddHiddenClassTemp(
            containerTwo,
            'day-avg-temp',
            `${day.avgtemp_c}°C`
        );
        createAppendAndAddClassTemp(
            containerTwo,
            'day-avg-temp',
            `${day.avgtemp_f}°F`
        );
        createAndAppendElement(containerTwo, 'day-rain', `${day.rain} %`);
    });
}

function loadHourlyForecast(forecastHourlyData) {
    forecastHourlyData.forEach((day) => {
        day.forEach((hour) => {
            createAndAppendElementWithIcon(
                containerThree,
                'hour-time',
                formatTime(hour.time),
                hour.icon
            );
            createAppendAndAddHiddenClassTemp(
                containerThree,
                'hour-temp',
                `${hour.temp_c}°C`
            );
            createAppendAndAddClassTemp(
                containerThree,
                'hour-temp',
                `${hour.temp_f}°F`
            );
            createAndAppendElement(
                containerThree,
                'chance-of-rain',
                `${hour.chance_of_rain} %`
            );
        });
    });
}

function loadContainerOne(reducedWeatherData) {
    createAndAppendElementWithIcon(
        containerOne,
        'name',
        reducedWeatherData.name,
        reducedWeatherData.icon
    );
    createAndAppendElement(
        containerOne,
        'date',
        formatDate(reducedWeatherData.time)
    );
    createAndAppendElement(
        containerOne,
        'time',
        formatTime(reducedWeatherData.time)
    );
    createAndAppendElement(
        containerOne,
        'condition',
        reducedWeatherData.condition
    );
    createAppendAndAddHiddenClassTemp(
        containerOne,
        'temp-container-one',
        `${reducedWeatherData.temp_c}°C`
    );
    createAppendAndAddClassTemp(
        containerOne,
        'temp-container-one',
        `${reducedWeatherData.temp_f}°F`
    );
    createAppendAndAddHiddenClassTemp(
        containerOne,
        'feels-like-temp-container-one',
        `${reducedWeatherData.feelslike_c}°C`
    );
    createAppendAndAddClassTemp(
        containerOne,
        'feels-like-temp-container-one',
        `${reducedWeatherData.feelslike_f}°F`
    );
    createAndAppendElement(
        containerOne,
        'humidity',
        `${reducedWeatherData.humidity} %`
    );
    createAppendAndAddHiddenClassTemp(
        containerOne,
        'wind-speed',
        `${reducedWeatherData.wind_kph} KM/H`
    );
    createAppendAndAddClassTemp(
        containerOne,
        'wind-speed',
        `${reducedWeatherData.wind_mph} MPH`
    );
}

function loadContainerTwo(reducedWeatherData) {
    createAndAppendElement(
        containerTwo,
        'sunrise',
        `Sunrise: ${reducedWeatherData.forecastDay[0].sunrise}`
    );
    createAndAppendElement(
        containerTwo,
        'sunset',
        `Sunset: ${reducedWeatherData.forecastDay[0].sunset}`
    );

    loadDailyForecast(reducedWeatherData.forecastDay);

    loadHourlyForecast(reducedWeatherData.forecastHourly);
}

function loadDOM(reducedWeatherData) {
    clearDOM();
    console.log(reducedWeatherData);
    loadContainerOne(reducedWeatherData);
    loadContainerTwo(reducedWeatherData);
    backgroundUpdater(reducedWeatherData);
}

export default loadDOM;
