function switchTemperatureMeasurement() {
    const temperatureElements = Array.from(document.querySelectorAll('.temp'));

    temperatureElements.forEach((element) => {
        if (element.classList.contains('hidden-temp')) {
            element.classList.remove('hidden-temp');
        } else {
            element.classList.add('hidden-temp');
        }
    });
}

function switchTimeMeasurement() {
    const timeContainers = Array.from(
        document.querySelectorAll('.time-containers')
    );

    timeContainers.forEach((container) => {
        const newDisplayValue = container.classList.contains('hidden')
            ? 'grid'
            : 'none';

        if (container.classList.contains('hidden')) {
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
        }

        container.style.setProperty('display', newDisplayValue);
    });
}

export { switchTemperatureMeasurement, switchTimeMeasurement };
