function verificarParOuImpar() {
    let numero = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');
    if (numero === '') {
        resultado.innerHTML = 'Digite um número!';
        return;
    }
    resultado.innerHTML = (numero % 2 === 0) ? 'O número é <b>Par</b>!' : 'O número é <b>Ímpar</b>!';
}

function criarBrilhos() {
    const brilhoContainer = document.querySelector('.brilhos');
    for (let i = 0; i < 50; i++) {
        let brilho = document.createElement('div');
        brilho.classList.add('brilho');
        brilho.style.top = Math.random() * 100 + 'vh';
        brilho.style.left = Math.random() * 100 + 'vw';
        brilho.style.animationDelay = Math.random() * 2 + 's';
        brilhoContainer.appendChild(brilho);
    }
}
criarBrilhos();
