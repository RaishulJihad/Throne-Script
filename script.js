// Game Variables
let coins = 0;
let power = 0;
let citizens = 0;

// Elements
const logoScreen = document.getElementById("logo-screen");
const gameScreen = document.getElementById("game-screen");

const coinsDisplay = document.getElementById("coins");
const powerDisplay = document.getElementById("power");
const citizensDisplay = document.getElementById("citizens");

const fightBtn = document.getElementById("fight-btn");
const recruitBtn = document.getElementById("recruit-btn");

const fightOptions = document.getElementById("fight-options");
const recruitOptions = document.getElementById("recruit-options");

const goblinBtn = document.getElementById("goblin-btn");
const orcBtn = document.getElementById("orc-btn");
const swordmanBtn = document.getElementById("swordman-btn");

const backFight = document.getElementById("back-fight");
const backRecruit = document.getElementById("back-recruit");

// Show game after logo fades
setTimeout(() => {
  logoScreen.style.display = "none";
  gameScreen.classList.remove("hidden");
}, 3000); // 2s + 1s fade = 3s total

// Button events
fightBtn.onclick = () => {
  fightOptions.classList.remove("hidden");
  recruitOptions.classList.add("hidden");
  fightBtn.style.display = "none";
  recruitBtn.style.display = "none";
};

recruitBtn.onclick = () => {
  recruitOptions.classList.remove("hidden");
  fightOptions.classList.add("hidden");
  fightBtn.style.display = "none";
  recruitBtn.style.display = "none";
};

backFight.onclick = backRecruit.onclick = () => {
  fightOptions.classList.add("hidden");
  recruitOptions.classList.add("hidden");
  fightBtn.style.display = "inline-block";
  recruitBtn.style.display = "inline-block";
};

// Fight options
goblinBtn.onclick = () => {
  if (power >= 100) {
    coins += 10;
    updateDisplay();
    alert("You defeated the Goblin!");
  } else {
    alert("Not enough power!");
  }
};

orcBtn.onclick = () => {
  if (power >= 1000) {
    coins += 100;
    updateDisplay();
    alert("You defeated the Orc!");
  } else {
    alert("Not enough power!");
  }
};

// Recruit option
swordmanBtn.onclick = () => {
  if (coins >= 100) {
    coins -= 100;
    power += 100;
    citizens += 1;
    updateDisplay();
    alert("Swordman recruited!");
  } else {
    alert("Not enough coins!");
  }
};

// Update Display
function updateDisplay() {
  coinsDisplay.textContent = coins;
  powerDisplay.textContent = power;
  citizensDisplay.textContent = citizens;
}