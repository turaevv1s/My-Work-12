const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

let currentYear = new Date().getFullYear();

let newYearTime = new Date(`5-29-${currentYear + 1} 13:40:00`);

function updateCount() {
  let currentTime = new Date();

  let d = newYearTime - currentTime;

  let days = Math.floor(d / 1000 / 60 / 60 / 24);
  let hours = Math.floor((d / 1000 / 60 / 60) % 24);
  let minutes = Math.floor((d / 1000 / 60) % 60);
  let seconds = Math.floor((d / 1000) % 60);

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;
}

setInterval(updateCount, 1000);
