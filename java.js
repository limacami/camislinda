// ======== VARIÁVEIS DO JOGO ========
let posicao = 0;
let produtividade = 50;
let rotatividade = 50;

// Coordenadas reais de cada casa do tabuleiro
const casas = [
    { x: 55, y: 470 }, { x: 90, y: 430 }, { x: 125, y: 390 }, { x: 160, y: 350 },
    { x: 200, y: 320 }, { x: 250, y: 300 }, { x: 300, y: 280 }, { x: 350, y: 270 },
    { x: 400, y: 270 }, { x: 450, y: 280 }, { x: 480, y: 320 }, { x: 470, y: 370 },
    { x: 440, y: 410 }, { x: 400, y: 440 }, { x: 350, y: 460 }, { x: 300, y: 470 },
    { x: 250, y: 470 }, { x: 200, y: 460 }, { x: 150, y: 450 }, { x: 110, y: 440 },
    { x: 80, y: 420 } // meta
];

// Lista de cartas
const desafios = [
    "Conflito entre colegas: +10 de Rotatividade",
    "Falta de comunicação na equipe: -10 de Produtividade",
    "Erro na produção por falta de cooperação: -5 Produtividade, +5 Rotatividade",
    "Novo funcionário sem treinamento: +8 Rotatividade"
];
const solucoes = [
    "Treinamento de trabalho em equipe: +10 Produtividade",
    "Reunião de alinhamento: -8 Rotatividade",
    "Reconhecimento de bom trabalho: +5 Produtividade, -5 Rotatividade",
    "Liderança incentiva cooperação: +8 Produtividade"
];

// Elementos do HTML
const player = document.getElementById("player");
const produtividadeSpan = document.getElementById("produtividade");
const rotatividadeSpan = document.getElementById("rotatividade");
const diceResult = document.getElementById("diceResult");
const cardDiv = document.getElementById("card");

// Botão do dado
document.getElementById("rollDice").addEventListener("click", () => {
    let dado = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = `Resultado: ${dado}`;
    moverJogador(dado);
});

// ======== MOVIMENTO SUAVE ========
function moverJogador(passos) {
    let destino = posicao + passos;
    if (destino >= casas.length) destino = casas.length - 1;

    let i = posicao;
    function animar() {
        if (i < destino) {
            i++;
            player.style.left = casas[i].x + "px";
            player.style.top = casas[i].y + "px";
            setTimeout(animar, 300);
        } else {
            posicao = destino;
            sortearCarta();
            verificarVitoria();
        }
    }
    animar();
}

// ======== SORTEIO DE CARTAS ========
function sortearCarta() {
    const tipo = Math.random() < 0.5 ? "desafio" : "solucao";
    const lista = tipo === "desafio" ? desafios : solucoes;
    const carta = lista[Math.floor(Math.random() * lista.length)];
    cardDiv.textContent = carta;
    aplicarEfeito(carta);
}

// ======== APLICA EFEITO ========
function aplicarEfeito(carta) {
    const matches = carta.match(/([+-]?\d+)\s*(Produtividade|Rotatividade)/gi);
    if (matches) {
        matches.forEach(m => {
            const valor = parseInt(m);
            if (m.toLowerCase().includes("produtividade")) {
                produtividade += valor;
            }
            if (m.toLowerCase().includes("rotatividade")) {
                rotatividade += valor;
            }
        });
    }
    produtividade = Math.max(0, Math.min(produtividade, 100));
    rotatividade = Math.max(0, Math.min(rotatividade, 100));

    produtividadeSpan.textContent = produtividade;
    rotatividadeSpan.textContent = rotatividade;
}

// ======== VITÓRIA OU DERROTA ========
function verificarVitoria() {
    if (produtividade >= 100) {
        alert("🎉 Vocês venceram! A produtividade atingiu a meta!");
        resetarJogo();
    }
    if (rotatividade >= 100) {
        alert("💀 Vocês perderam! A rotatividade ficou crítica!");
        resetarJogo();
    }
}

// ======== RESETAR JOGO ========
function resetarJogo() {
    posicao = 0;
    produtividade = 50;
    rotatividade = 50;
    produtividadeSpan.textContent = produtividade;
    rotatividadeSpan.textContent = rotatividade;
    player.style.left = casas[0].x + "px";
    player.style.top = casas[0].y + "px";
    cardDiv.textContent = "";
}



