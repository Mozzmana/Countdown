const daysSpan = document.querySelector(".days");
const hoursSpan = document.querySelector(".hours");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");
const button = document.querySelector(".button");
const stopButton = document.querySelector(".stop-button")


let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let timer = null;

button.addEventListener("click", () => {
  seconds = parseInt(secondsSpan.value) || 0;
  minutes = parseInt(minutesSpan.value) || 0;
  hours = parseInt(hoursSpan.value) || 0;
  days = parseInt(daysSpan.value) || 0;

  countdown();
  clearInterval(timer);
  timer = setInterval(countdown, 1000);
});


stopButton.addEventListener("click" , () => {
  clearInterval(timer)
})






function countdown() {
  seconds--;

  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }

  if (minutes < 0) {
    hours--;
    minutes = 59;
  }

  if (hours < 0) {
    days--;
    hours = 23;
  }

  if (days === 0 && minutes === 0 && seconds === 0 && hours === 0) {
    clearInterval(timer);
  }

  secondsSpan.value = seconds.toString().padStart(2, "0");
  minutesSpan.value = minutes.toString().padStart(2, "0");
  hoursSpan.value = hours.toString().padStart(2, "0");
  daysSpan.value = days.toString().padStart(2, "0");
}
