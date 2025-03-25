let escolhaUsuario = '';

function escolher(opcao) {
    escolhaUsuario = opcao;
    alert("Você escolheu " + opcao);
}

function jogar() {
    if (!escolhaUsuario) {
        alert("Escolha Par ou Ímpar primeiro!");
        return;
    }

    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    if (isNaN(numeroUsuario)) {
        alert("Digite um número válido!");
        return;
    }

    let numeroComputador = Math.floor(Math.random() * 10);
    let soma = numeroUsuario + numeroComputador;
    let resultado = (soma % 2 === 0) ? 'par' : 'impar';

    let mensagem = `Você escolheu ${escolhaUsuario}. <br>
                    Seu número: ${numeroUsuario}. <br>
                    Número do computador: ${numeroComputador}. <br>
                    Soma: ${soma} (${resultado}). <br>
                    <strong>${escolhaUsuario === resultado ? 'Você venceu!' : 'Você perdeu!'}</strong>`;

    document.getElementById("resultado").innerHTML = mensagem;
}

