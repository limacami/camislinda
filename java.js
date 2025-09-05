// Definindo usuário e senha
const usuarioCorreto = "Camila"; // <-- altere aqui seu nome
const senhaCorreta = "26/11/2008";  // <-- altere para sua data de nascimento

// Pegando elementos
const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === usuarioCorreto && password === senhaCorreta) {
    mensagem.style.color = "green";
    mensagem.textContent = "✅ Login realizado com sucesso!";
  } else {
    mensagem.style.color = "red";
    mensagem.textContent = "❌ Usuário ou senha incorretos!";
  }
});