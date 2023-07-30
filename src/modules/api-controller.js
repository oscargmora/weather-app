function processWeatherData(weatherData) {
    console.log(weatherData);
    const reducedWeatherData = {
        name: weatherData.location.name,
        time: weatherData.location.localtime,
        cloud: weatherData.current.cloud,
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
                today: [
                    { date: weatherData.forecast.forecastday[0].date },
                    {
                        sunrise:
                            weatherData.forecast.forecastday[0].astro.sunrise
                    },
                    {
                        sunset: weatherData.forecast.forecastday[0].astro.sunset
                    },
                    {
                        rain: weatherData.forecast.forecastday[0].day
                            .daily_chance_of_rain
                    },
                    {
                        avgtemp_c:
                            weatherData.forecast.forecastday[0].day.avgtemp_c
                    },
                    {
                        avgtemp_f:
                            weatherData.forecast.forecastday[0].day.avgtemp_f
                    }
                ]
            },
            {
                dayTwo: [
                    { date: weatherData.forecast.forecastday[0].date },
                    {
                        rain: weatherData.forecast.forecastday[0].day
                            .daily_chance_of_rain
                    },
                    {
                        avgtemp_c:
                            weatherData.forecast.forecastday[0].day.avgtemp_c
                    },
                    {
                        avgtemp_f:
                            weatherData.forecast.forecastday[0].day.avgtemp_f
                    }
                ]
            },
            {
                dayThree: [
                    { date: weatherData.forecast.forecastday[0].date },
                    {
                        rain: weatherData.forecast.forecastday[0].day
                            .daily_chance_of_rain
                    },
                    {
                        avgtemp_c:
                            weatherData.forecast.forecastday[0].day.avgtemp_c
                    },
                    {
                        avgtemp_f:
                            weatherData.forecast.forecastday[0].day.avgtemp_f
                    }
                ]
            }
        ],
        forecastHour: [
            {
                today: {
                    todayHourly:
                        weatherData.forecast.forecastday[0].hour.forEach(
                            console.log('works')
                        )
                }
            }
        ]
    };
    console.log(reducedWeatherData);
}

async function getForecast(city) {
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=7429a55f3f544dbfadd13909232407&q=${city}&days=3`,
        { mode: 'cors' }
    );
    const weatherData = await response.json();
    processWeatherData(weatherData);
    return weatherData;
}

export default getForecast;
