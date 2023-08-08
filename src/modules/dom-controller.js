import humidityImage from '../img/icons/humidity.png';
import rainImage from '../img/icons/rain.png';
import sunriseImage from '../img/icons/sunrise.png';
import sunsetImage from '../img/icons/sunset.png';
import thermometerImage from '../img/icons/thermometer.png';
import windSpeedImage from '../img/icons/wind.png';
import {
    formatDate,
    formatDayOfTheWeek,
    formatTime,
    createIcon,
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
        const div = document.createElement('div');

        createAndAppendElementWithIcon(
            div,
            'day-of-the-week',
            formatDayOfTheWeek(day.date),
            day.icon
        );
        createAppendAndAddHiddenClassTemp(
            div,
            'day-avg-temp',
            `${day.avgtemp_c}°C`
        );
        createAppendAndAddClassTemp(div, 'day-avg-temp', `${day.avgtemp_f}°F`);

        containerTwo.append(div);
    });
}

function loadHourlyForecast(forecastHourlyData) {
    forecastHourlyData.forEach((day) => {
        day.forEach((hour) => {
            const div = document.createElement('div');

            createAndAppendElementWithIcon(
                div,
                'hour-time',
                formatTime(hour.time),
                hour.icon
            );
            createAppendAndAddHiddenClassTemp(
                div,
                'hour-temp',
                `${hour.temp_c}°C`
            );
            createAppendAndAddClassTemp(div, 'hour-temp', `${hour.temp_f}°F`);
            containerThree.append(div);
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
    createIcon(containerOne, thermometerImage, 'thermometer-icon');
    createAppendAndAddHiddenClassTemp(
        containerOne,
        'feels-like-temp-container-one',
        `Feels Like \n ${reducedWeatherData.feelslike_c}°C`
    );
    createAppendAndAddClassTemp(
        containerOne,
        'feels-like-temp-container-one',
        `Feels Like \n ${reducedWeatherData.feelslike_f}°F`
    );
    createIcon(containerOne, rainImage, 'rain-icon');
    createAndAppendElement(
        containerOne,
        'chance-of-rain',
        `Chance Of Rain \n ${reducedWeatherData.forecastDay[0].rain}%`
    );
    createIcon(containerOne, humidityImage, 'humidity-icon');
    createAndAppendElement(
        containerOne,
        'humidity',
        `Humidity \n ${reducedWeatherData.humidity} %`
    );
    createIcon(containerOne, windSpeedImage, 'wind-speed-icon');
    createAppendAndAddHiddenClassTemp(
        containerOne,
        'wind-speed',
        `Wind Speed \n ${reducedWeatherData.wind_kph} KM/H`
    );
    createAppendAndAddClassTemp(
        containerOne,
        'wind-speed',
        `Wind Speed \n ${reducedWeatherData.wind_mph} MPH`
    );
    createIcon(containerOne, sunriseImage, 'sunrise-icon');
    createAndAppendElement(
        containerOne,
        'sunrise',
        `Sunrise \n ${reducedWeatherData.forecastDay[0].sunrise}`
    );
    createIcon(containerOne, sunsetImage, 'sunset-icon');
    createAndAppendElement(
        containerOne,
        'sunset',
        `Sunset \n ${reducedWeatherData.forecastDay[0].sunset}`
    );
}

function loadContainerTwo(reducedWeatherData) {
    loadDailyForecast(reducedWeatherData.forecastDay);
    loadHourlyForecast(reducedWeatherData.forecastHourly);
}

function loadDOM(reducedWeatherData) {
    clearDOM();
    loadContainerOne(reducedWeatherData);
    loadContainerTwo(reducedWeatherData);
    backgroundUpdater(reducedWeatherData);
}

export default loadDOM;
