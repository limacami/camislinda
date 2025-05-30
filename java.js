let clickCount = 0;
let highscore = 0;
let gameStarted = false;

// Função para começar o jogo
function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        document.getElementById('clickButton').disabled = false;
        clickCount = 0;
        updateDisplay();
    }
}

// Função para atualizar os elementos na tela
function updateDisplay() {
    document.getElementById('clicks').textContent = clickCount;
    document.getElementById('highscore').textContent = highscore;
}

// Função de clique no botão
document.getElementById('clickButton').addEventListener('click', function () {
    if (!gameStarted) return;

    clickCount++;

    // Atualiza o recorde se o número de cliques for maior
    if (clickCount > highscore) {
        highscore = clickCount;
    }

    updateDisplay();
});

