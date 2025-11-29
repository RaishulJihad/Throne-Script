// Initial State
const state = {
  citizens: 100,
  power: 0,
  coins: 0,
  date: new Date('2025-03-15T00:00:00Z'),
  paused: false,
  speeds: [1, 3, 5, 10],
  speedIndex: 0
};

// DOM
const intro = document.getElementById('intro');
const startBtn = document.getElementById('start');
const mainApp = document.getElementById('mainApp');

const citizensVal = document.getElementById('citizensVal');
const powerVal = document.getElementById('powerVal');
const coinsVal = document.getElementById('coinsVal');
const timeVal = document.getElementById('timeVal');

const speedBtn = document.getElementById('speedBtn');
const timeClickable = document.getElementById('timeClickable');
const floatMsg = document.getElementById('floatMsg');

const researchBtn = document.getElementById('researchBtn');
const actionBtn = document.getElementById('actionBtn');

// Format D/M/Y
function formatDMY(d){
  return `${d.getUTCDate()}/${d.getUTCMonth()+1}/${d.getUTCFullYear()}`;
}

function updateUI(){
  citizensVal.textContent = state.citizens;
  powerVal.textContent = state.power;
  coinsVal.textContent = state.coins;
  timeVal.textContent = formatDMY(state.date);
  speedBtn.textContent = 'x' + state.speeds[state.speedIndex];
}

function addDays(n){
  state.date = new Date(state.date.getTime() + n * 86400000);
}

let floatTimeout = null;
function showFloat(msg){
  if(floatTimeout){ clearTimeout(floatTimeout); }
  floatMsg.textContent = msg;
  floatMsg.classList.add('show');
  floatTimeout = setTimeout(() => floatMsg.classList.remove('show'), 1000);
}

function cycleSpeed(){
  state.speedIndex = (state.speedIndex + 1) % state.speeds.length;
  updateUI();
}

function togglePause(){
  state.paused = !state.paused;
  showFloat(state.paused ? "Pause" : "Resume");
}

updateUI();

// Time loop
setInterval(() => {
  if(!state.paused){
    addDays(state.speeds[state.speedIndex]);
    updateUI();
  }
}, 1000);

// Start button → fade intro
startBtn.addEventListener('click', () => {
  intro.classList.add('hiding');
  setTimeout(() => {
    intro.style.display = 'none';
    mainApp.classList.add('visible');
  }, 850);
});

// Buttons
speedBtn.addEventListener('click', cycleSpeed);
timeClickable.addEventListener('click', togglePause);

researchBtn.onclick = () => {}; // placeholder
actionBtn.onclick = () => {};   // placeholder
