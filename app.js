const days = [
    'Sunday', 'Monday', 'Tuesday', 
    'Wednesday', 'Thursday', 'Friday', 
    'Saturday'
];
const months = [
    'January', 'February', 'March', 
    'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 
    'November', 'December'
];
const dateElement = document.querySelector('.date');
const timeElement = document.querySelector('.time');

const createDateAndTime = () => {
    const today = new Date();

    const date = today.getDate();
    const day = today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const noon = (hours < 12) ? "AM" : "PM";
    const hoursInTwelveHoursFormat = (hours > 12) ? (hours - 12) : hours;

    const dateTemplate = `
        <span>${date}</span> 
        <span>${days[day]}</span>, 
        <span>${months[month]}</span>, 
        <span>${year}</span>!
    `;

    const timeTemplate = `
        <span>${hoursInTwelveHoursFormat}</span>:<span>${minutes}</span>:<span>${seconds}</span> <span>${noon}</span>
    `;

    dateElement.innerHTML = dateTemplate;
    timeElement.innerHTML = timeTemplate;
};

const oneSecond = 1000;
setInterval(createDateAndTime, oneSecond);