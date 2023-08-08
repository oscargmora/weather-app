import dayPartlyCloudy from '../img/backgrounds/day-partly-cloudy.jpg';
import dayClearSkies from '../img/backgrounds/day-clear-skies.jpg';
import nightClearSkies from '../img/backgrounds/night-clear-skies.jpg';
import nightPartlyCloudy from '../img/backgrounds/night-partly-cloudy.jpg';
import overcast from '../img/backgrounds/overcast.jpg';
import rain from '../img/backgrounds/rain.jpg';
import thunderstorm from '../img/backgrounds/thunderstorm.jpg';

function backgroundUpdater(reducedWeatherData) {
    switch (true) {
        case reducedWeatherData.condition === 'Partly cloudy' &&
            reducedWeatherData.is_day === 0:
            document.body.style.backgroundImage = `url('${nightPartlyCloudy}')`;
            document.body.classList.add('dark-mode');
            break;
        case reducedWeatherData.condition === 'Clear' &&
            reducedWeatherData.is_day === 0:
            document.body.style.backgroundImage = `url('${nightClearSkies}')`;
            document.body.classList.add('dark-mode');
            break;
        case reducedWeatherData.condition === 'Partly cloudy':
            document.body.style.backgroundImage = `url('${dayPartlyCloudy}')`;
            document.body.classList.remove('dark-mode');
            break;
        case reducedWeatherData.condition === 'Overcast':
            document.body.style.backgroundImage = `url('${overcast}')`;
            document.body.classList.add('dark-mode');
            break;
        case reducedWeatherData.condition === 'Sunny':
            document.body.style.backgroundImage = `url('${dayClearSkies}')`;
            document.body.classList.remove('dark-mode');
            break;
        case reducedWeatherData.condition === 'Rainy' ||
            reducedWeatherData.condition === 'Patchy rain possible' ||
            reducedWeatherData.condition === 'Light rain' ||
            reducedWeatherData.condition === 'Moderate rain':
            document.body.style.backgroundImage = `url('${rain}')`;
            document.body.classList.add('dark-mode');
            break;
        case reducedWeatherData.condition === 'Thunderstorms' ||
            reducedWeatherData.condition === 'Patchy light rain with thunder':
            document.body.style.backgroundImage = `url('${thunderstorm}')`;
            document.body.classList.add('dark-mode');
            break;
        default:
            document.body.style.backgroundImage = `url('${dayClearSkies}')`;
            document.body.classList.remove('dark-mode');
            break;
    }
}

export default backgroundUpdater;
