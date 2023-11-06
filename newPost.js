"use strict";
var id = 0;
// novo post
function newPost(){
    id++;
    //elementos da lista
    let ul = document.getElementById("lista-posts");
    let novoPostLi = document.createElement("li");
    let propriedadesDiv = document.createElement("div");
    let tweetDiv = document.createElement("div");
    novoPostLi.setAttribute('class','post');
    propriedadesDiv.setAttribute('class','content-box');
    tweetDiv.setAttribute("class","tweet-content");
    //dados do usuario que está tweetando
    let username = document.getElementById("username").textContent;
    let name = document.getElementById("name").textContent;
    let p = document.getElementById("text-tweet").value;

    let userIcon = document.getElementsByClassName("user-icon-post")[0];
    let srcIcon = userIcon.querySelector("img").src;

    tweetDiv.innerHTML = (
    `<div class="user-icon-post">
        <img src="${srcIcon}">
    </div>
    <div class="div2"> 
        <div class="user-data">
            <div>
                <span id="name">${name}</span>
                <span id="username">${username}</span>
            </div>
            <img src="/twitter-icons/png/twitter-delete.png" alt="deletar tweet" class="del">
        </div>
        <div class="tweet-content">
            <p id="tweet-text">${p}</p>
        </div>
        <div class="interactions">
            <div>
                <img src="/twitter-icons/svg/twitter-reply-outline.svg">
                <span id="qtdReply"> </span>
            </div>
            <div>
            <img src="/twitter-icons/svg/twitter-retweet.svg" class="no-retweet" onclick="retweet(${id})" id="noRT${id}">
            <img src="/twitter-icons/svg/twitter-retweet-colored.svg" class="retweet-active" onclick="retweet(${id})" id="activeRT${id}">
                <span id="qtdRT">0</span>
            </div>
            <div>
                <img src="/twitter-icons/svg/twitter-like-outline.svg" onclick ="likeDeslike(${id})" class="no-like" id="noLike${id}">
                <img src="/twitter-icons/svg/twitter-like.svg" onclick ="likeDeslike(${id})" class="active-like" id="activeLike${id}">
                <span id="qtdLike${id}">0</span>
            </div>
            <img src="/twitter-icons/svg/twitter-link.svg">
        </div>
    </div>`
    );

    propriedadesDiv.insertAdjacentHTML('afterbegin', tweetDiv.innerHTML);
    novoPostLi.setAttribute('id', `li${id}`);
    novoPostLi.append(propriedadesDiv);
    ul.appendChild(novoPostLi);

    ul.insertBefore(novoPostLi, ul.firstChild);
}

//limpa o campo de texto
document.addEventListener("DOMContentLoaded", function () {
    const botaoEnviar = document.getElementById("send-tweet");
    const textBox = document.getElementById("text-tweet");

    textBox.addEventListener("keyup", function (event){
        if (event.key === "Enter") {
          newPost();
          limparCampo(); 
        }
    });
    
      botaoEnviar.addEventListener("click", function(){
        newPost();
      });
    
    function limparCampo() {
      textBox.value = "";
    }
    botaoEnviar.addEventListener("click", limparCampo);
});

//deleta tweet
document.addEventListener("DOMContentLoaded", function () {

    let botoesDel = document.getElementsByClassName("del");
    let ul = document.getElementById("lista-posts");
    console.log(document.querySelectorAll('.del'));
    
    for (let i in botoesDel){
        console.log(i);
        i.addEventListener("click", function(){
            let postSelecionado = document.getElementById(`li${id}`);
            if (postSelecionado) {
                let confirmacao = confirm("Deseja excluir o item?");
                if(confirmacao){
                    ul.removeChild(postSelecionado);
                }
            }
        });
    }
});



// var filhoRemovido = elemento.removeChild(filho);
// elemento.removeChild(filho);
