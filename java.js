let escolhaUsuario = '';

function escolher(opcao) {
    escolhaUsuario = opcao;
    alert("Você escolheu " + opcao.toUpperCase() + " ✨");
}

function jogar() {
    if (!escolhaUsuario) {
        alert("Escolha Par ou Ímpar antes de jogar! 💖");
        return;
    }

    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    if (isNaN(numeroUsuario)) {
        alert("Digite um número válido! 💜");
        return;
    }

    let numeroComputador = Math.floor(Math.random() * 10);
    let soma = numeroUsuario + numeroComputador;
    let resultado = (soma % 2 === 0) ? 'par' : 'impar';

    let mensagem = `Você escolheu: ${escolhaUsuario.toUpperCase()}!<br>
                    💖 Seu número: ${numeroUsuario} <br>
                    💜 Número do computador: ${numeroComputador} <br>
                    ✨ Soma: ${soma} (${resultado.toUpperCase()}) ✨<br>
                    <strong>${escolhaUsuario === resultado ? '🎉 Você venceu! 🎉' : '💔 Você perdeu! 💔'}</strong>`;

    document.getElementById("resultado").innerHTML = mensagem;
}

