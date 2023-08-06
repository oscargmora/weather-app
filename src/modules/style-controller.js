function backgroundUpdater(reducedWeatherData) {
    switch (true) {
        case reducedWeatherData.condition === 'Partly cloudy':
            document.body.style.backgroundImage =
                "url('../img/backgrounds/day-partly-cloudy.jpg')";
            break;
        case reducedWeatherData.condition === 'Overcast':
            document.body.style.backgroundImage =
                "url('../img/backgrounds/overcast.jpg')";
            break;
        case reducedWeatherData.condition === 'Sunny':
            document.body.style.backgroundImage =
                "url('../img/backgrounds/day-clear-skies.jpg')";
            break;
        case reducedWeatherData.condition === 'Rainy':
            document.body.style.backgroundImage =
                "url('../img/backgrounds/rain.jpg')";
            break;
        case reducedWeatherData.condition === 'Thunderstorms':
            document.body.style.backgroundImage =
                "url('../img/backgrounds/thunderstorm.jpg')";
            break;
        case reducedWeatherData.condition === 'Partly Cloudy':
            document.body.style.backgroundImage =
                "url('../img/backgrounds/night-partly-cloudy.jpg')";
            break;
        case reducedWeatherData.condition === 'Clear':
            document.body.style.backgroundImage =
                "url('../img/backgrounds/night-clear-skies.jpg')";
            break;
        default:
            document.body.style.backgroundImage =
                "url('../img/day-partly-cloudy.jpg')";
            break;
    }
}

export default backgroundUpdater;
