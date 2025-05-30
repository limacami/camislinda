let clickCount = 0;
let highscore = localStorage.getItem('highscore') || 0;

// Atualiza a contagem de cliques e o recorde
function updateStats() {
    document.getElementById('click-count').textContent = clickCount;

    if (clickCount > highscore) {
        highscore = clickCount;
        document.getElementById('highscore').textContent = highscore;
        localStorage.setItem('highscore', highscore); // Salvar no localStorage
    }
}

// Função para reiniciar o jogo
function restartGame() {
    clickCount = 0;
    updateStats();
}

// Adicionar eventos aos botões
document.getElementById('click-button').addEventListener('click', () => {
    clickCount++;
    updateStats();
});

document.getElementById('restart-button').addEventListener('click', restartGame);

// Inicializar o jogo com as informações atuais
updateStats();

