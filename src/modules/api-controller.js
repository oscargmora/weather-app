async function getWeatherData() {
    const response = await fetch(
        'https://api.weatherapi.com/v1/current.json?key=7429a55f3f544dbfadd13909232407&q=london',
        { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData);
}

export default getWeatherData;
