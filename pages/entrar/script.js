const perfilNome = document.querySelector(".name");
const containerAvatar = document.querySelector(".containerAvatar");

const key = "users";
const local = JSON.parse(localStorage.getItem(key)) || {};
const userAtual = JSON.parse(localStorage.getItem("click"));

window.onload = function () {
  perfilNome.innerHTML = userAtual;

  const img = document.createElement("img");
  img.className = "avatar";
  img.src = avatarUser[local[userAtual].avatar];

  containerAvatar.appendChild(img);
};
