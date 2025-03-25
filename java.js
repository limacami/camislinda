function verificarParOuImpar() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    if (numero === "") {
        resultado.textContent = "Por favor, digite um número!";
        resultado.style.color = "yellow";
        return;
    }

    numero = parseInt(numero);

    if (isNaN(numero)) {
        resultado.textContent = "Isso não é um número válido!";
        resultado.style.color = "red";
        return;
    }

    if (numero % 2 === 0) {
        resultado.textContent = `O número ${numero} é PAR!`;
        resultado.style.color = "lightgreen";
    } else {
        resultado.textContent = `O número ${numero} é ÍMPAR!`;
        resultado.style.color = "orange";
    }
}
