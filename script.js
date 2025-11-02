document.getElementById("start-button").addEventListener("click", () => {
    const logoScreen = document.getElementById("logo-screen");
    const gameScreen = document.getElementById("game-screen");

    logoScreen.classList.add("fade-out");

    setTimeout(() => {
        logoScreen.style.display = "none";
        gameScreen.classList.remove("hidden");
    }, 2000); // 2 seconds fade
});
