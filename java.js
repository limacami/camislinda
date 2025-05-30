let clickCount = 0;
let highscore = 0;
let gameStarted = false;

// Função para começar o jogo
function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        document.getElementById('clickButton').disabled = false; // Ativa o botão de clique
        clickCount = 0; // Reinicia o contador de cliques
        updateDisplay(); // Atualiza os valores na tela
    }
}

// Função para atualizar os elementos na tela
function updateDisplay() {
    document.getElementById('clicks').textContent = clickCount;  // Exibe o total de cliques
    document.getElementById('highscore').textContent = highscore; // Exibe o recorde
}

// Função de clique no botão
document.getElementById('clickButton').addEventListener('click', function () {
    if (!gameStarted) return;  // Se o jogo não começou, não faz nada

    clickCount++;  // Aumenta o número de cliques

    // Atualiza o recorde se o número de cliques for maior
    if (clickCount > highscore) {
        highscore = clickCount;
    }

    updateDisplay();  // Atualiza a tela com o novo número de cliques e recorde
});

