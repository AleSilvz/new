const personagens = document.querySelector(".personagens");
const nome = document.querySelector("#name");
const btnCriar = document.querySelector(".criar");

const key = "users";

const local = JSON.parse(localStorage.getItem(key)) || {};

window.onload = function () {
  escolha();
};

let imgEscolhida = null;

const escolha = () => {
  const fragment = document.createDocumentFragment();

  avatarUser.forEach((i, index) => {
    const imgs = document.createElement("img");
    imgs.src = i;

    imgs.addEventListener("click", () => {
      const imagems = document.querySelectorAll(".select");
      imagems.forEach((i) => i.classList.remove("select"));

      imgs.classList.add("select");
      imgEscolhida = index;
    });

    fragment.appendChild(imgs);
  });

  personagens.appendChild(fragment);
};

const seuApelido = () => {
  const value = nome.value.toUpperCase().trim();

  if (value) {
    if (local[value]) {
      alert("Esse apelido já existe!");
      return;
    }

    local[value] = { avatar: imgEscolhida };
    localStorage.setItem(key, JSON.stringify(local));
    localStorage.setItem("click", JSON.stringify(value));
  }
};

btnCriar.addEventListener("click", () => {
  if (!nome.value) {
    alert("Digite seu apelido!");
    return;
  } else if (imgEscolhida == null || imgEscolhida === "") {
    alert("Escolha um avatar!");
    return;
  }
  seuApelido();
  location.href = "../../pages/entrar/index.html";
});
