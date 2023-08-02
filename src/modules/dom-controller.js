import { format } from 'date-fns';

const containerOne = document.querySelector('#container-one');
const containerTwo = document.querySelector('#container-two');

function formatDate(timeData) {
    const year = timeData.slice(0, 4);
    const nextMonth = timeData.slice(5, 7);
    const day = timeData.slice(8, 10);

    // Fix which month displays for Date-Fns
    const currentMonth = Number(nextMonth) - 1;

    const formattedDate = format(
        new Date(year, currentMonth, day),
        'MMMM dd, yyyy'
    );
    return formattedDate;
}

function formatTime(timeData) {
    const year = timeData.slice(0, 4);
    const month = timeData.slice(5, 7);
    const day = timeData.slice(8, 10);
    let hour = timeData.slice(11, 13);
    const minutes = timeData.slice(14, 17);

    if (hour.includes(':')) {
        hour = hour.replace(':', '');
        hour = `0${hour}`;
    }

    const formattedTime = format(
        new Date(year, month, day, hour, minutes),
        'h:mm aaaa'
    );

    return formattedTime;
}

function clearDOM() {
    containerOne.innerHTML = '';
    containerTwo.innerHTML = '';
}

function loadContainerOne(reducedWeatherData) {
    const formattedDate = formatDate(reducedWeatherData.time);
    const formattedTime = formatTime(reducedWeatherData.time);

    const locationP = document.createElement('h1');
    const dateP = document.createElement('p');
    const timeP = document.createElement('p');
    const condition = document.createElement('p');
    const tempC = document.createElement('p');
    const tempF = document.createElement('p');
    const tempCFeelsLike = document.createElement('p');
    const tempFFeelsLike = document.createElement('p');
    const humidity = document.createElement('p');
    const windKPH = document.createElement('p');
    const windMPH = document.createElement('p');

    locationP.innerText = reducedWeatherData.name;
    dateP.innerText = formattedDate;
    timeP.innerText = formattedTime;
    condition.innerText = reducedWeatherData.condition;
    tempC.innerText = `${reducedWeatherData.temp_c}°C`;
    tempF.innerText = `${reducedWeatherData.temp_f}°F`;
    tempCFeelsLike.innerText = `${reducedWeatherData.feelslike_c}°C`;
    tempFFeelsLike.innerText = `${reducedWeatherData.feelslike_f}°F`;
    humidity.innerText = `${reducedWeatherData.humidity} %`;
    windKPH.innerText = `${reducedWeatherData.wind_kph} KM/H`;
    windMPH.innerText = `${reducedWeatherData.wind_mph} MPH`;

    containerOne.append(
        locationP,
        dateP,
        timeP,
        condition,
        tempC,
        tempF,
        tempCFeelsLike,
        tempFFeelsLike,
        humidity,
        windKPH,
        windMPH
    );
}

function loadContainerTwo(reducedWeatherData) {
    const forecastDayData = reducedWeatherData.forecastDay;
    forecastDayData.forEach((day) => {
        console.log(day);
    });
}

function loadDOM(reducedWeatherData) {
    clearDOM();
    loadContainerOne(reducedWeatherData);
    loadContainerTwo(reducedWeatherData);
}

export default loadDOM;
