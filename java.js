function verificarParOuImpar() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (numero % 2 === 0) {
        resultado.textContent = `O número ${numero} é PAR!`;
        resultado.style.color = "lightgreen";
    } else {
        resultado.textContent = `O número ${numero} é ÍMPAR!`;
        resultado.style.color = "orange";
    }
}
