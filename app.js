import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
import FirebaseAuthService from "./authService.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQfLHIjFd6nmfUCsBD11s3n_9ZBK5AF-w",
  authDomain: "pwa-pam.firebaseapp.com",
  projectId: "pwa-pam",
  storageBucket: "pwa-pam.firebasestorage.app",
  messagingSenderId: "824966685183",
  appId: "1:824966685183:web:48854bf74618176e4dc7ca",
  measurementId: "G-7LPERFZPGM"
};

// Inicializar Firebase
const fbApp = initializeApp(firebaseConfig);
getAnalytics(fbApp);

const authService = new FirebaseAuthService(fbApp);

// Captura do formulário
document.getElementById("cadastroForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const resultado = await authService.criarUsuarioComEmailESenha(email, senha);

  if (resultado.sucesso) {
    window.location.href = `profile.html?email=${encodeURIComponent(email)}`;
  } else {
    alert("Erro ao cadastrar usuário: " + resultado.erro.message);
  }
});
