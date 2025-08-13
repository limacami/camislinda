// ======== VARIÁVEIS DO JOGO ========
let posicao = 0; // posição inicial no tabuleiro
let produtividade = 50;
let rotatividade = 50;

// Lista de cartas de desafio
const desafios = [
    "Conflito entre colegas: +10 de Rotatividade",
    "Falta de comunicação na equipe: -10 de Produtividade",
    "Erro na produção por falta de cooperação: -5 Produtividade, +5 Rotatividade",
    "Novo funcionário sem treinamento: +8 Rotatividade"
];

// Lista de cartas de solução
const solucoes = [
    "Treinamento de trabalho em equipe: +10 Produtividade",
    "Reunião de alinhamento: -8 Rotatividade",
    "Reconhecimento de bom trabalho: +5 Produtividade, -5 Rotatividade",
    "Liderança incentiva cooperação: +8 Produtividade"
];

// Referências ao HTML
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
    verificarVitoria();
});

// ======== MOVIMENTO DO JOGADOR ========
function moverJogador(passos) {
    posicao += passos;

    // Limite de posições (20 casas no tabuleiro)
    if (posicao > 20) posicao = 20;

    // Atualiza posição visual (simples: esquerda para direita)
    let novaLeft = 20 + (posicao * 20);
    let novaTop = 450 - (Math.floor(posicao / 5) * 100);

    player.style.left = novaLeft + "px";
    player.style.top = novaTop + "px";

    // Sorteia evento
    if (Math.random() < 0.5) {
        puxarCarta(desafios, "desafio");
    } else {
        puxarCarta(solucoes, "solução");
    }
}

// ======== CARTAS ========
function puxarCarta(lista, tipo) {
    let carta = lista[Math.floor(Math.random() * lista.length)];
    cardDiv.textContent = carta;

    if (tipo === "desafio") aplicarEfeito(carta, false);
    else aplicarEfeito(carta, true);
}

// ======== APLICA EFEITOS ========
function aplicarEfeito(carta, positiva) {
    if (carta.includes("Produtividade")) {
        let valor = parseInt(carta.match(/([+-]?\d+)/));
        produtividade += valor;
    }
    if (carta.includes("Rotatividade")) {
        let valor = parseInt(carta.match(/([+-]?\d+)/));
        rotatividade += valor;
    }

    // Atualiza valores
    produtividadeSpan.textContent = produtividade;
    rotatividadeSpan.textContent = rotatividade;

    // Limites
    if (produtividade < 0) produtividade = 0;
    if (rotatividade < 0) rotatividade = 0;
}

// ======== CHECAR VITÓRIA OU DERROTA ========
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
    player.style.left = "20px";
    player.style.top = "450px";
    cardDiv.textContent = "";
}

