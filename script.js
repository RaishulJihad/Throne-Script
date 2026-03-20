// INTRO FADE
let intro = document.getElementById("intro");

document.addEventListener("click", function () {
    intro.style.opacity = "0";
    setTimeout(() => intro.style.display = "none", 1500);
}, { once: true });


// VARIABLES
let day = 1;
let month = 1;
let year = 1000;

let money = 0;
let speed = 1;
let paused = false;


// DATE SYSTEM
function getDaysInMonth(m, y) {
    return new Date(y, m, 0).getDate();
}

function updateDate() {
    document.getElementById("date").innerText = `${day}/${month}/${year}`;
}

// TIME LOOP
setInterval(() => {
    if (paused) return;

    for (let i = 0; i < speed; i++) {
        day++;

        if (day > getDaysInMonth(month, year)) {
            day = 1;
            month++;

            if (month > 12) {
                month = 1;
                year++;
            }
        }
    }

    updateDate();
}, 1000);


// PAUSE / RESUME
document.getElementById("pauseBtn").onclick = () => paused = true;
document.getElementById("resumeBtn").onclick = () => paused = false;


// SPEED SYSTEM
let speedBtn = document.getElementById("speedBtn");

speedBtn.onclick = () => {
    if (speed === 1) {
        speed = 3;
        speedBtn.src = "3x.png";
    } else if (speed === 3) {
        speed = 5;
        speedBtn.src = "5x.png";
    } else if (speed === 5) {
        speed = 10;
        speedBtn.src = "10x.png";
    } else {
        speed = 1;
        speedBtn.src = "1x.png";
    }
};


// ACTION SCREEN
let actionScreen = document.getElementById("actionScreen");

document.getElementById("actionBtn").onclick = () => {
    actionScreen.style.display = "block";
};

document.getElementById("backFromAction").onclick = () => {
    actionScreen.style.display = "none";
};


// RESEARCH SCREEN
let researchScreen = document.getElementById("researchScreen");

document.getElementById("researchBtn").onclick = () => {
    researchScreen.style.display = "block";
};

document.getElementById("backFromResearch").onclick = () => {
    researchScreen.style.display = "none";
};
