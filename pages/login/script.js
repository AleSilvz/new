const key = "users";
const local = JSON.parse(localStorage.getItem(key)) || {};

const users = () => {
  const all = Object.keys(local);

  all.forEach((user) => {
    const div = container();
    const divImg = containerImg(user);
    const name = h1(user);

    const excluir = document.createElement("div");
    excluir.className = "apagar";
    excluir.innerHTML = `<ion-icon name="trash"></ion-icon>`;

    div.appendChild(divImg);
    div.appendChild(name);
    div.appendChild(excluir);

    excluir.addEventListener("click", (event) => {
      event.stopPropagation();

      delete local[user];
      savedLocalStrorage();
      location.reload();
    });

    div.addEventListener("click", () => {
      localStorage.setItem("click", JSON.stringify(user));
      location.href = "../../pages/entrar/index.html";
    });
    document.body.appendChild(div);
  });
};

const container = () => {
  const div = document.createElement("div");
  div.className = "userClass";

  return div;
};

const containerImg = (user) => {
  const imgAvatar = document.createElement("div");
  imgAvatar.className = "avatar";

  const img = document.createElement("img");
  img.classList.add("avatarImg");
  img.src = avatarUser[local[user].avatar];

  imgAvatar.appendChild(img);

  return imgAvatar;
};

const h1 = (user) => {
  const h1 = document.createElement("h1");
  h1.innerText = user;
  return h1;
};

const savedLocalStrorage = () => {
  localStorage.setItem(key, JSON.stringify(local));
};

users();
