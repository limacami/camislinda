document.getElementById("btnVerificar").addEventListener("click", function() {
    verificarParOuImpar();
});

function verificarParOuImpar() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    if (numero === "") {
        resultado.style.color = "red";
        resultado.textContent = "Por favor, insira um número!";
        resultado.classList.add("show");
        return;
    }

    numero = parseInt(numero);
    
    if (isNaN(numero)) {
        resultado.style.color = "red";
        resultado.textContent = "Isso não é um número válido!";
        resultado.classList.add("show");
        return;
    }

    if (numero % 2 === 0) {
        resultado.style.color = "#00ffcc";
        resultado.textContent = `O número ${numero} é Par! 🎉`;
    } else {
        resultado.style.color = "#ffcc00";
        resultado.textContent = `O número ${numero} é Ímpar! 🔵`;
    }

    resultado.classList.add("show");
}
