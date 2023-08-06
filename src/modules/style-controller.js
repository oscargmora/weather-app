import dayPartlyCloudy from '../img/backgrounds/day-partly-cloudy.jpg';
import dayClearSkies from '../img/backgrounds/day-clear-skies.jpg';
import nightClearSkies from '../img/backgrounds/night-clear-skies.jpg';
import nightPartlyCloudy from '../img/backgrounds/night-partly-cloudy.jpg';
import overcast from '../img/backgrounds/overcast.jpg';
import rain from '../img/backgrounds/rain.jpg';
import thunderstorm from '../img/backgrounds/thunderstorm.jpg';

function backgroundUpdater(reducedWeatherData) {
    switch (true) {
        case reducedWeatherData.condition === 'Partly cloudy':
            document.body.style.backgroundImage = `url('${dayPartlyCloudy}')`;
            break;
        case reducedWeatherData.condition === 'Overcast':
            document.body.style.backgroundImage = `url('${overcast}')`;
            break;
        case reducedWeatherData.condition === 'Sunny':
            document.body.style.backgroundImage = `url('${dayClearSkies}')`;
            break;
        case reducedWeatherData.condition === 'Rainy':
            document.body.style.backgroundImage = `url('${rain.jpg}')`;
            break;
        case reducedWeatherData.condition === 'Thunderstorms':
            document.body.style.backgroundImage = `url('${thunderstorm}')`;
            break;
        case reducedWeatherData.condition === 'Partly Cloudy':
            document.body.style.backgroundImage = `url('${nightPartlyCloudy}')`;
            break;
        case reducedWeatherData.condition === 'Clear':
            document.body.style.backgroundImage = `url('${nightClearSkies}')`;
            break;
        default:
            document.body.style.backgroundImage = `url('${dayClearSkies}')`;
            break;
    }
}

export default backgroundUpdater;
