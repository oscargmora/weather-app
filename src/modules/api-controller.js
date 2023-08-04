import loadDOM from './dom-controller';

function getHourlyData(day, dayArray) {
    day.hour.forEach((hour) => {
        const hourData = {
            time: hour.time,
            temp_c: hour.temp_c,
            temp_f: hour.temp_f,
            chance_of_rain: hour.chance_of_rain
        };
        dayArray.push(hourData);
    });
    return dayArray;
}

function getHourlyDataPerDay(weatherData) {
    const hourlyDataPerDayArray = [];
    const days = weatherData.forecast.forecastday;
    days.forEach((day) => {
        const dayArray = [];
        getHourlyData(day, dayArray);
        hourlyDataPerDayArray.push(dayArray);
    });
    return hourlyDataPerDayArray;
}

function processWeatherData(weatherData) {
    const hourlyDataPerDayArray = getHourlyDataPerDay(weatherData);
    const reducedWeatherData = {
        name: weatherData.location.name,
        time: weatherData.location.localtime,
        condition: weatherData.current.condition.text,
        feelslike_c: weatherData.current.feelslike_c,
        feelslike_f: weatherData.current.feelslike_f,
        humidity: weatherData.current.humidity,
        temp_c: weatherData.current.temp_c,
        temp_f: weatherData.current.temp_f,
        wind_kph: weatherData.current.wind_kph,
        wind_mph: weatherData.current.wind_mph,
        forecastDay: [
            {
                date: weatherData.forecast.forecastday[0].date,
                sunrise: weatherData.forecast.forecastday[0].astro.sunrise,
                sunset: weatherData.forecast.forecastday[0].astro.sunset,
                rain: weatherData.forecast.forecastday[0].day
                    .daily_chance_of_rain,
                avgtemp_c: weatherData.forecast.forecastday[0].day.avgtemp_c,
                avgtemp_f: weatherData.forecast.forecastday[0].day.avgtemp_f
            },
            {
                date: weatherData.forecast.forecastday[1].date,
                rain: weatherData.forecast.forecastday[1].day
                    .daily_chance_of_rain,
                avgtemp_c: weatherData.forecast.forecastday[1].day.avgtemp_c,
                avgtemp_f: weatherData.forecast.forecastday[1].day.avgtemp_f
            },
            {
                date: weatherData.forecast.forecastday[2].date,
                rain: weatherData.forecast.forecastday[2].day
                    .daily_chance_of_rain,
                avgtemp_c: weatherData.forecast.forecastday[2].day.avgtemp_c,
                avgtemp_f: weatherData.forecast.forecastday[2].day.avgtemp_f
            }
        ],
        forecastHourly: hourlyDataPerDayArray
    };
    return reducedWeatherData;
}

async function getForecast(city) {
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=7429a55f3f544dbfadd13909232407&q=${city}&days=3`,
        { mode: 'cors' }
    );
    const weatherData = await response.json();
    const reducedWeatherData = processWeatherData(weatherData);
    loadDOM(reducedWeatherData);
    return reducedWeatherData;
}

export default getForecast;
