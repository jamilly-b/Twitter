function retweet() {
  // muda a cor da imagem
  document.getElementById("no-retweet").style.display = "none";
  document.getElementById("retweet-active").style.display = "inline";

  // adiciona um RT
  let numRT = document.getElementById("qtdRT");
  numRT.innerHTML = Number(numRT.innerHTML) + 1;
}

function removeRetweet() {
  // muda a cor da imagem
  document.getElementById("no-retweet").style.display = "inline";
  document.getElementById("retweet-active").style.display = "none";

  // remove o RT
  let numRT = document.getElementById("qtdRT");
  numRT.innerHTML = Number(numRT.innerHTML) - 1;
}

function like() {
  // coração vazio
  document.getElementById("no-like").style.display = "none";
  document.getElementById("active-like").style.display = "inline";

  // adiciona um like
  let numLike = document.getElementById("qtdLike");
  numLike.innerHTML = Number(numLike.innerHTML) + 1;
}

function deslike() {
  // exibe o coração fechado após o usuário clicar
  document.getElementById("no-like").style.display = "inline";
  document.getElementById("active-like").style.display = "none";

  // remove o like
  let numLike = document.getElementById("qtdLike");
  numLike.innerHTML = Number(numLike.innerHTML) - 1;
}