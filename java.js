let contador = 0;

function mostrarMensagem() {
  contador++;
  const msg = document.getElementById('mensagem');
  msg.textContent = `Você clicou ${contador} ${contador === 1 ? 'vez' : 'vezes'}! 💖`;
  msg.style.fontWeight = 'bold';
  msg.style.fontSize = '1.4em';
  msg.style.transition = 'all 0.3s ease';
  msg.style.color = '#e75480';
}
