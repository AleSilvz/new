const btn_criar = document.querySelector("#btn_criar");
const btn_entrar = document.querySelector(".entrar");

btn_criar.addEventListener("click", () => {
  location.href = "../../pages/criar perfil/index.html";
});

btn_entrar.addEventListener("click", () => {
  location.href = "../../pages/login/index.html";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("Service Worker registrado!", reg))
      .catch((err) => console.error("Erro ao registrar o Service Worker", err));
  });
}
