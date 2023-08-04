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

function createAndAppendElement(parent, text) {
    const element = document.createElement('p');
    element.innerText = text;
    parent.appendChild(element);
}

function createAppendAndAddClassTemp(parent, text) {
    const element = document.createElement('p');
    element.innerText = text;
    element.classList.add('temp');
    parent.appendChild(element);
}

function createAppendAndAddHiddenClassTemp(parent, text) {
    const element = document.createElement('p');
    element.innerText = text;
    element.classList.add('temp', 'hidden-temp');
    parent.appendChild(element);
}

export {
    formatDate,
    formatDayOfTheWeek,
    formatTime,
    createAndAppendElement,
    createAppendAndAddClassTemp,
    createAppendAndAddHiddenClassTemp
};
