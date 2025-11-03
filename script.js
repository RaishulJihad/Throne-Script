const startScreen = document.getElementById("start-screen");
const mainScreen = document.getElementById("main-screen");
const actionScreen = document.getElementById("action-screen");

const startBtn = document.getElementById("start-btn");
const actionBtn = document.getElementById("action-btn");
const backBtn = document.getElementById("back-btn");

const timeDisplay = document.getElementById("time");
const pauseBtn = document.getElementById("pause-btn");
const speed1Btn = document.getElementById("speed1-btn");
const speed7Btn = document.getElementById("speed7-btn");
const speed15Btn = document.getElementById("speed15-btn");

let day = 1, month = 1, year = 0;
let paused = false;
let speed = 1000;
let timer;

// --- Start Screen Fade ---
startBtn.addEventListener("click", () => {
  startScreen.classList.add("fade-out");
  setTimeout(() => {
    startScreen.style.display = "none";
    mainScreen.classList.remove("hidden");
    startTime();
  }, 2000);
});

// --- Time System ---
function startTime() {
  timer = setInterval(() => {
    if (!paused) {
      day++;
      if (day > 30) {
        day = 1;
        month++;
        if (month > 12) {
          month = 1;
          year++;
        }
      }
      timeDisplay.textContent = `${day}/${month}/${year}`;
    }
  }, speed);
}

function setSpeed(ms) {
  clearInterval(timer);
  speed = ms;
  startTime();
}

pauseBtn.addEventListener("click", () => paused = !paused);
speed1Btn.addEventListener("click", () => setSpeed(1000));
speed7Btn.addEventListener("click", () => setSpeed(1000 / 7));
speed15Btn.addEventListener("click", () => setSpeed(1000 / 15));

// --- Action Screen Function ---
actionBtn.addEventListener("click", () => {
  paused = true;
  mainScreen.classList.add("hidden");
  actionScreen.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  actionScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
  paused = false;
});
