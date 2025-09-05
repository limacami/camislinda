// Definindo usuário e senha
const usuarioCorreto = "Camila";
const senhaCorreta = "26112008jj";

// Pegando elementos
const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === usuarioCorreto && password === senhaCorreta) {
    mensagem.style.color = "#00ff88";
    mensagem.textContent = "✅ Login realizado com sucesso!";
  } else {
    mensagem.style.color = "#ff4d6d";
    mensagem.textContent = "❌ Usuário ou senha incorretos!";
  }
});