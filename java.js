// ======== VARIÁVEIS DO JOGO ========
let posicao = 0; // posição inicial no tabuleiro
let produtividade = 50;
let rotatividade = 50;

// Coordenadas reais das casas (x e y) - ajuste para seu tabuleiro
const casas = [
    { x: 20, y: 450 }, { x: 70, y: 450 }, { x: 120, y: 450 },
    { x: 170, y: 450 }, { x: 220, y: 450 }, { x: 270, y: 450 },
    { x: 320, y: 450 }, { x: 370, y: 450 }, { x: 420, y: 450 },
    { x: 470, y: 450 }, { x: 470, y: 350 }, { x: 420, y: 350 },
    { x: 370, y: 350 }, { x: 320, y: 350 }, { x: 270, y: 350 },
    { x: 220, y: 350 }, { x: 170, y: 350 }, { x: 120, y: 350 },
    { x: 70, y: 350 },  { x: 20, y: 350 }, { x: 20, y: 250 }
];

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
});

// ======== MOVIMENTO SUAVE DO JOGADOR ========
function moverJogador(passos) {
    let destino = posicao + passos;
    if (destino >= casas.length) destino = casas.length - 1;

    let i = posicao;

    function animar() {
        if (i < destino) {
            i++;
            player.style.left = casas[i].x + "px";
            player.style.top = casas[i].y + "px";
            setTimeout(animar, 300); // velocidade
        } else {
            posicao = destino;
            sortearCarta();
            verificarVitoria();
        }
    }
    animar();
}

// ======== SORTEAR CARTA ========
function sortearCarta() {
    const tipo = Math.random() < 0.5 ? "desafio" : "solucao";
    const lista = tipo === "desafio" ? desafios : solucoes;
    const carta = lista[Math.floor(Math.random() * lista.length)];
    cardDiv.textContent = carta;
    aplicarEfeito(carta);
}

// ======== APLICAR EFEITO ========
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
    // Limites
    produtividade = Math.max(0, Math.min(produtividade, 100));
    rotatividade = Math.max(0, Math.min(rotatividade, 100));

    produtividadeSpan.textContent = produtividade;
    rotatividadeSpan.textContent = rotatividade;
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
    player.style.left = casas[0].x + "px";
    player.style.top = casas[0].y + "px";
    cardDiv.textContent = "";
}


