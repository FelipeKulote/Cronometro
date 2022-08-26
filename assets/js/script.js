// variáveis para o header
const today = document.getElementById("day");
const currentMonth = document.getElementById("month");
const currentYear = document.getElementById("year");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
// variáveis para o tempo do cronometro
let hoursTimer = 0;
let minutesTimer = 0;
let secondsTimer = 0;
let interval;

const relógio = setInterval(function time() {
  let dateToday = new Date();
  let day = dateToday.getDate();
  let month = dateToday.getMonth() + 1;
  let year = dateToday.getFullYear();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  today.textContent = day;
  currentMonth.textContent = month;
  currentYear.textContent = year;
  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
});

function timer() {
  secondsTimer++;
  document.getElementById("seconds-timer").innerText = secondsTimer;
  document.getElementById("minutes-timer").innerText = minutesTimer;
  document.getElementById("hours-timer").innerText = hoursTimer;
  if (secondsTimer < 10) {
    document.getElementById("seconds-timer").innerText = "0" + secondsTimer;
  }
  if (minutesTimer < 10) {
    document.getElementById("minutes-timer").innerText = "0" + minutesTimer;
  }
  if (hoursTimer < 10) {
    document.getElementById("hours-timer").innerText = "0" + hoursTimer;
  }
  if (secondsTimer == 60) {
    minutesTimer++;
    secondsTimer = 0;
  }
  if (minutesTimer == 60) {
    hoursTimer++;
    minutesTimer = 0;
  }
}

const btStart = document.querySelector('#btStart')
function start() {
  interval = setInterval(timer, 1000);
  btStart.style.display = "none";
}
// function continueTimer(){
//   interval = setInterval(timerDown, 1000);
//   btContinue.style.display = "none";
// }
function pause() {
  clearInterval(interval);
  btStart.style.display = "block";
  btTemporizador.style.display = "flex";
}
function stopTimer() {
  clearInterval(interval);
  document.getElementById("seconds-timer").innerText = "00";
  document.getElementById("minutes-timer").innerText = "00";
  document.getElementById("hours-timer").innerText = "00";
  secondsTimer = 0;
  minutesTimer = 0;
  hoursTimer = 0;
  btStart.style.display = "block";
  btTemporizador.style.display = "flex";
}

function timerDown(){
  secondsTimer--;
  document.getElementById("seconds-timer").innerText = secondsTimer;
  document.getElementById("minutes-timer").innerText = minutesTimer;
  document.getElementById("hours-timer").innerText = hoursTimer;
  if (secondsTimer < 10) {
    document.getElementById("seconds-timer").innerText = "0" + secondsTimer;
  }
  if (minutesTimer < 10) {
    document.getElementById("minutes-timer").innerText = "0" + minutesTimer;
  }
  if (hoursTimer < 10) {
    document.getElementById("hours-timer").innerText = "0" + hoursTimer;
  }
  if (secondsTimer == 0 && minutesTimer > 0) {
    minutesTimer--;
    secondsTimer = 60;
  }
  if (minutesTimer == 0 && hoursTimer > 0) {
    hoursTimer--;
    minutesTimer = 60;
  }
  if (secondsTimer == 0 && minutesTimer == 0 && hoursTimer == 0){
    clearInterval(interval);
    btTemporizador.style.display = "flex";
    btStart.style.display = "block";
  }
}

const startTimer = document.querySelector('#btStartTimer');
const btTemporizador = document.querySelector('.btCountdown')

startTimer.addEventListener('click', function(e){
  e.preventDefault();
  const inputSeconds = document.querySelector('#inputSeconds');
  const valueSec = inputSeconds.value;
  if (valueSec == ''){
    secondsTimer = 1;
  } else {
  secondsTimer = valueSec;
  }

  const inputMinutes = document.querySelector('#inputMinutes');
  const valueMin = inputMinutes.value;
  if (valueMin == '') {
    minutesTimer = '0' + valueMin;
  } else {
  minutesTimer = valueMin;
  }

  const inputHours = document.querySelector('#inputHours');
  const valueH = inputHours.value;
  if (valueH == '') {
    hoursTimer = '0' + valueH;
  } else {
  hoursTimer = valueH;
  }

  interval = setInterval(timerDown, 1000);
  btStart.style.display = "none";
  btTemporizador.style.display = "none";
})

const modal = document.querySelector("#modalOverlay");
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("btCountdown")) {
    modal.style.display = "flex";
  }
});

window.addEventListener("click", function(event){
  if (event.target.classList.contains("buttonModal")){
    modal.style.display = "none";
  }
})

