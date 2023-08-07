import { format } from 'date-fns';

function extractDateParts(timeData) {
    const [year, month, day] = timeData.slice(0, 10).split('-');
    const currentMonth = Number(month) - 1;
    return { year, month, day, currentMonth };
}

function formatDate(timeData) {
    const { year, currentMonth, day } = extractDateParts(timeData);
    return format(new Date(year, currentMonth, day), 'EEEE, MMMM d yyyy');
}

function formatDayOfTheWeek(timeData) {
    const { year, currentMonth, day } = extractDateParts(timeData);
    return format(new Date(year, currentMonth, day), 'EEEE');
}

function formatTime(timeData) {
    const { year, month, day } = extractDateParts(timeData);
    let hour = timeData.slice(11, 13);
    const minutes = timeData.slice(14, 17);

    if (hour.includes(':')) {
        hour = hour.replace(':', '');
        hour = `0${hour}`;
    }

    return format(new Date(year, month - 1, day, hour, minutes), 'h:mm a');
}

function createIcon(parent, dataIcon, newClass) {
    const icon = new Image();

    icon.src = dataIcon;

    icon.classList.add('data-icon', newClass);

    parent.append(icon);
}

function createAndAppendElement(parent, propertyName, text) {
    const element = document.createElement('p');

    element.innerText = text;

    element.classList.add(propertyName);

    parent.appendChild(element);
}

function createAndAppendElementWithIcon(parent, propertyName, text, icon) {
    const element = document.createElement('p');
    const weatherIcon = document.createElement('img');

    element.innerText = text;

    element.classList.add(propertyName);

    weatherIcon.src = icon;

    weatherIcon.classList.add('weather-icon');

    parent.append(element, weatherIcon);
}

function createAppendAndAddClassTemp(parent, propertyName, text) {
    const element = document.createElement('p');

    element.innerText = text;

    element.classList.add(propertyName, 'temp');

    parent.appendChild(element);
}

function createAppendAndAddHiddenClassTemp(parent, propertyName, text) {
    const element = document.createElement('p');

    element.innerText = text;

    element.classList.add(propertyName, 'temp', 'hidden-temp');

    parent.appendChild(element);
}

export {
    formatDate,
    formatDayOfTheWeek,
    formatTime,
    createIcon,
    createAndAppendElement,
    createAndAppendElementWithIcon,
    createAppendAndAddClassTemp,
    createAppendAndAddHiddenClassTemp
};
