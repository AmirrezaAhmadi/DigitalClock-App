const timeElement = document.getElementById('time');
const ampmElement = document.getElementById('ampm');
const dayElement = document.getElementById('day');
const dateElement = document.getElementById('date');
const formatSwitch = document.getElementById('format-switch');

let is24HourFormat = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const month = now.toLocaleDateString('en-US', { month: 'short' });
    const date = now.getDate();

    let ampm = '';
    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    }

    timeElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    ampmElement.textContent = ampm;
    dayElement.textContent = `${month}, ${day}`;
    dateElement.textContent = date;

    setTimeout(updateClock, 1000);
}

formatSwitch.addEventListener('change', (e) => {
    is24HourFormat = e.target.checked;
    updateClock();
});

updateClock();