let clickCount = 0;
let highscore = localStorage.getItem('highscore') || 0;

document.getElementById('click-button').addEventListener('click', () => {
    clickCount++;
    document.getElementById('click-count').textContent = clickCount;

    if (clickCount > highscore) {
        highscore = clickCount;
        document.getElementById('highscore').textContent = highscore;
        localStorage.setItem('highscore', highscore); // Salvar o recorde no localStorage
    }
});
