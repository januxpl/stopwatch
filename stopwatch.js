const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
const time = document.querySelector('.time');
let times = document.querySelector('.times');
let clear = document.querySelector('.clear');

let timerMsp = 0;
let timerMsl = 0;
let timerSp = 0;
let timerSl = 0;
let timerMp = 0;
let timerMl = 0;
let isOn = false;
let isPaused = false;
let n = 1;
let nStop = 0;

start.addEventListener('click', () => {
  if (!isOn) {
    startTime();
  }
});
pause.addEventListener('click', () => {
  if (isOn) {
    pauseTime();
  }
});
stop.addEventListener('click', () => {
  if (isOn || isPaused) {
    stopTime();
  }
});
time.addEventListener('click', () => {
  if (isOn || isPaused) {
    timeTime();
  }
});
clear.addEventListener('click', () => {
  if (n>1 || nStop>0) {
    clearTime();
  }
});

function startTime() {
  if (!isPaused) {n = 1;}
  start.innerHTML = 'Start';
  start.classList.add('unactive');
  pause.classList.remove('unactive');
  stop.classList.remove('unactive');
  time.classList.remove('unactive');
  if (!isOn) {
    id = setInterval( () => {
      timer.innerHTML = `${timerMl}${timerMp}:${timerSl}${timerSp}:${timerMsl}${timerMsp}`;
      timerMsp++;
      if(timerMsp>9) {timerMsp=0; timerMsl++}
      if(timerMsl>9) {timerMsl=0; timerSp++}
      if(timerSp>9) {timerSp=0; timerSl++}
      if(timerSl>5) {timerSl=0; timerMp++}
      if(timerMp>9) {timerMp=0; timerMl++}
    }, 10);
    isOn = true;
    isPaused = false;
  }
}

function pauseTime () {
  if (isOn) {
    clearInterval(id);
    timer.innerHTML = `${timerMl}${timerMp}:${timerSl}${timerSp}:${timerMsl}${timerMsp}`;
    isOn = false;
    isPaused = true;
    start.innerHTML = 'Resume';
    start.classList.remove('unactive');
    pause.classList.add('unactive');
  }
}

function stopTime () {
  times.innerHTML += `Stop: ${timerMl}${timerMp}:${timerSl}${timerSp}:${timerMsl}${timerMsp}<br>`;
  nStop++;
  clear.classList.remove('unactive');
  clearInterval(id);
  timerMsp = 0;
  timerMsl = 0;
  timerSp = 0;
  timerSl = 0;
  timerMp = 0;
  timerMl = 0;
  timer.innerHTML = `${timerMl}${timerMp}:${timerSl}${timerSp}:${timerMsl}${timerMsp}`;
  isOn = false;
  isPaused = false;
  start.innerHTML = 'Start';
  start.classList.remove('unactive');
  pause.classList.add('unactive');
  stop.classList.add('unactive');
  time.classList.add('unactive');
}

function timeTime () {
  times.innerHTML += `${n}: ${timerMl}${timerMp}:${timerSl}${timerSp}:${timerMsl}${timerMsp}<br>`;
  n++;
  clear.classList.remove('unactive');
}

function clearTime () {
  times.innerHTML = '';
  n = 1;
  nStop = 0;
  clear.classList.add('unactive');
}

