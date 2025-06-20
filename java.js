let clickCount = 0;
let highscore = 0;
let gameStarted = false;

const clicksDisplay = document.getElementById('clicks');
const highscoreDisplay = document.getElementById('highscore');
const clickButton = document.getElementById('clickButton');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

function updateDisplay() {
    clicksDisplay.textContent = clickCount;
    highscoreDisplay.textContent = highscore;
}

startButton.addEventListener('click', () => {
    if (!gameStarted) {
        gameStarted = true;
        clickCount = 0;
        clickButton.disabled = false;
        updateDisplay();
    }
});

clickButton.addEventListener('click', () => {
    if (!gameStarted) return;

    clickCount++;
    if (clickCount > highscore) {
        highscore = clickCount;
    }
    updateDisplay();
});

resetButton.addEventListener('click', () => {
    gameStarted = false;
    clickCount = 0;
    clickButton.disabled = true;
    updateDisplay();
});
