function verificarParOuImpar() {
    let numeroInput = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    // Verifica se o usuário digitou algo
    if (numeroInput === "") {
        resultado.textContent = "Por favor, digite um número!";
        resultado.style.color = "red";
        return;
    }

    let numero = parseInt(numeroInput);

    // Verifica se é um número válido
    if (isNaN(numero)) {
        resultado.textContent = "Isso não é um número válido!";
        resultado.style.color = "red";
        return;
    }

    // Verifica se é par ou ímpar
    if (numero % 2 === 0) {
        resultado.textContent = `O número ${numero} é PAR!`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `O número ${numero} é ÍMPAR!`;
        resultado.style.color = "blue";
    }
}
s