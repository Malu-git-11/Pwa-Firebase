// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
import FireBaseAuthService from './authService.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQfLHIjFd6nmfUCsBD11s3n_9ZBK5AF-w",
  authDomain: "pwa-pam.firebaseapp.com",
  projectId: "pwa-pam",
  storageBucket: "pwa-pam.firebasestorage.app",
  messagingSenderId: "824966685183",
  appId: "1:824966685183:web:48854bf74618176e4dc7ca",
  measurementId: "G-7LPERFZPGM"
};

// Initialize Firebase
window.fbApp = initializeApp(firebaseConfig);
window.analytics = getAnalytics(window.fbApp);
console.log(window.fbApp);


const FirebaseAuthService = new FireBaseAuthService(window.fbApp);
FirebaseAuthService.criarUsuarioComEmailESenha(email, senha);
//se o login ocorrer de forma correta ira levar o usuario a pagina de perfil
if (FirebaseAuthService.criarUsuarioComEmailESenha(email, senha) = erro) {
  console.log("Erro")
} else {
  document.getElementById("Enviar").addEventListener("click", () => {
    window.location.href = "profile.html"
  })
}