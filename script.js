"use strict";

function likeDeslike(id) {
  //like
  if (document.getElementById(`activeLike${id}`).style.display === "none") {
    // Exibe o coração completo após o usuário clicar
    document.getElementById(`noLike${id}`).style.display = "inline";
    document.getElementById(`activeLike${id}`).style.display = "none";
    // Remove o like
    let numLike = document.getElementById(`qtdLike${id}`);
    numLike.innerHTML = (Number(numLike.innerHTML) - 1);
  } 
  //deslike
  else {
    document.getElementById(`noLike${id}`).style.display = "none";
    document.getElementById(`activeLike${id}`).style.display = "inline";
    // Adiciona um like
    let numLike = document.getElementById(`qtdLike${id}`);
    numLike.innerHTML = (Number(numLike.innerHTML) + 1);
  }
}

function retweet(id) {
  //rt
  if (document.getElementById(`activeRT${id}`).style.display === "none") {
    // Exibe o rt verde após o usuário clicar
    document.getElementById(`noRT${id}`).style.display = "inline";
    document.getElementById(`activeRT${id}`).style.display = "none";
    // Remove o retweet
    let numRT = document.getElementById(`qtdRT${id}`);
    numRT.innerHTML = (Number(numRT.innerHTML) - 1);
  } else {
    // 
    document.getElementById(`noRT${id}`).style.display = "none";
    document.getElementById(`activeRT${id}`).style.display = "inline";
    // 
    let numRT = document.getElementById(`qtdRT${id}`);
    numRT.innerHTML = (Number(numRT.innerHTML) + 1);
  }
}