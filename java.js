// Seletores
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1152;
canvas.height = 768;

// Carrega o tabuleiro
const boardImg = new Image();
boardImg.src = "assets/tabuleiro.png";

// Peão
let pawn = { x: 0, y: 0, size: 20, currentPos: 0 };

// Coordenadas de cada casa no tabuleiro (extraídas da imagem)
const positions = [
    { x: 85, y: 600 },
    { x: 155, y: 600 },
    { x: 225, y: 580 },
    { x: 295, y: 555 },
    { x: 365, y: 530 },
    { x: 435, y: 510 },
    { x: 505, y: 500 },
    { x: 575, y: 520 },
    { x: 645, y: 540 },
    { x: 715, y: 560 },
    { x: 785, y: 580 },
    { x: 855, y: 560 },
    { x: 925, y: 540 },
    { x: 990, y: 500 },
    { x: 955, y: 440 },
    { x: 885, y: 420 },
    { x: 815, y: 400 },
    { x: 745, y: 380 },
    { x: 675, y: 360 },
    { x: 605, y: 340 },
    { x: 535, y: 320 },
    { x: 465, y: 300 },
    { x: 395, y: 280 },
    { x: 325, y: 260 },
    { x: 255, y: 240 },
    { x: 185, y: 220 },
    { x: 115, y: 200 },
    { x: 85, y: 150 } // Meta
];

// Inicia peão
pawn.x = positions[0].x;
pawn.y = positions[0].y;

// Desenha jogo
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(boardImg, 0, 0, canvas.width, canvas.height);

    // Peão
    ctx.beginPath();
    ctx.arc(pawn.x, pawn.y, pawn.size, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}

// Movimento suave
function movePawn(steps) {
    let targetPos = pawn.currentPos + steps;
    if (targetPos >= positions.length) targetPos = positions.length - 1;

    let i = pawn.currentPos;
    function stepMove() {
        if (i < targetPos) {
            i++;
            pawn.x = positions[i].x;
            pawn.y = positions[i].y;
            pawn.currentPos = i;
            drawGame();
            setTimeout(stepMove, 300);
        }
    }
    stepMove();
}

// Rola dado e move
function rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    console.log("Dado:", result);
    movePawn(result);
}

// Evento clique para rolar dado
canvas.addEventListener("click", rollDice);

// Loop inicial
boardImg.onload = drawGame;



