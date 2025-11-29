// INTRO → MAIN SCREEN
document.getElementById("start-btn").onclick = () => {
    document.getElementById("intro").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("main-screen").style.display = "block";
    }, 900);
};

// GAME TIME SYSTEM
let day = 1;
let month = 1;
let year = 2025;

let speedModes = [1, 3, 5, 10];
let speedIndex = 0;
let isPaused = false;

function updateTimeLabel() {
    document.getElementById("time-label").innerText = `${day}/${month}/${year}`;
}

function tickTime() {
    if (!isPaused) {
        day += speedModes[speedIndex];

        if (day > 30) {
            day = 1;
            month++;
        }
        if (month > 12) {
            month = 1;
            year++;
        }

        updateTimeLabel();
    }
}
setInterval(tickTime, 1000);

// SPEED BUTTON
document.getElementById("speed-btn").onclick = () => {
    speedIndex = (speedIndex + 1) % speedModes.length;
    document.getElementById("speed-btn").innerText = `x${speedModes[speedIndex]}`;
};

// PAUSE/RESUME
document.getElementById("time-label").onclick = () => {
    isPaused = !isPaused;

    let msg = isPaused ? "Pause" : "Resume";
    let popup = document.getElementById("popup-message");

    popup.innerText = msg;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 1000);
};
