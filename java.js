function jogar(escolhaUsuario) {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);

    if (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 10) {
        alert("Digite um número entre 0 e 10! 💞");
        return;
    }

    let numeroComputador = Math.floor(Math.random() * 11);
    let divisao = numeroUsuario + numeroComputador;
    let resultado = (divisao / 2 === 0) ? 'par' : 'impar';

    let mensagem = `🎀 Você escolheu: ${escolhaUsuario.toUpperCase()}!<br>
                    ✨ O resultado foi: ${resultado.toUpperCase()}! ✨<br>
                    <strong>${escolhaUsuario === resultado ? '🎉 Você venceu! 🎉' : '💔 Você perdeu! 💔'}</strong>`;

    document.getElementById("resultado").innerHTML = mensagem;
}
