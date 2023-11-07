"use strict";
document.addEventListener("DOMContentLoaded", function () {
  atualizarListaDeTweets();
});
var id = 0;
// array tweets
let tweets = [
  {
    name: 'Vincent',
    username: 'urso',
    icon: 'https://cdn.pixabay.com/photo/2015/07/09/22/50/bear-838688_1280.jpg',
    tweetText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat autem repellat eum sapiente? Dolore alias ipsam minima dignissimos repellendus? Sit vero earum sed unde et velit, optio eos eius."
  },
  {
    name: 'Hammy',
    username: 'esquilo',
    icon: 'https://cdn.pixabay.com/photo/2023/05/16/12/14/nature-7997402_1280.jpg',
    tweetText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat autem repellat eum sapiente? Dolore alias ipsam minima dignissimos repellendus? Sit vero earum sed unde et velit, optio eos eius."
  },
  {
    name: "Porco espinho",
    username: "spike",
    icon: 'https://cdn.pixabay.com/photo/2016/10/21/19/45/hedgehog-1759027_1280.jpg',
    tweetText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat autem repellat eum sapiente? Dolore alias ipsam minima dignissimos repellendus? Sit vero earum sed unde et velit, optio eos eius."
  },
  {
    name: "leopardo",
    username: "leo",
    icon: 'https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg',
    tweetText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat autem repellat eum sapiente? Dolore alias ipsam minima dignissimos repellendus? Sit vero earum sed unde et velit, optio eos eius."
  },
  {
    name: 'Dragão guerreiro',
    username: 'po',
    icon: 'https://images7.alphacoders.com/342/thumb-1920-342341.jpg',
    tweetText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat autem repellat eum sapiente? Dolore alias ipsam minima dignissimos repellendus? Sit vero earum sed unde et velit, optio eos eius."
  },
  {
    name: 'tigresa',
    username: 'tigresa',
    icon: 'https://pbs.twimg.com/media/FwWreo4WYAIMKGP.jpg',
    tweetText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat autem repellat eum sapiente? Dolore alias ipsam minima dignissimos repellendus? Sit vero earum sed unde et velit, optio eos eius."
  },
  {
    name: "Mestre",
    username: "shifu",
    icon: 'https://cdn.amodays.com/bf85cf11f95b3d0ec5433ea8176e0562.jpg',
    tweetText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat autem repellat eum sapiente? Dolore alias ipsam minima dignissimos repellendus? Sit vero earum sed unde et velit, optio eos eius."
  },
  {
    name: "Tai lung",
    username: "dragaoguerreiro",
    icon: 'https://pbs.twimg.com/media/FXz-JP8VEAEYwhe.png',
    tweetText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat autem repellat eum sapiente? Dolore alias ipsam minima dignissimos repellendus? Sit vero earum sed unde et velit, optio eos eius."
  }
  
];

// adiciona ao array
function newPost() {
  let tweetText = document.getElementById("text-tweet").value;

  let newTweet = {
    name: 'CHOQUEI',
    username: 'choquei',
    icon: 'https://images.kooapp.com/koo-profile-media/profiles/37349503/010ACC0C-64C7-4B44-AEBA-2B35E53103AE-profile.jpeg',
    tweetText: tweetText
  };

  tweets.unshift(newTweet);
  atualizarListaDeTweets();
}

// exibe elementos da lista (atualizado a cada vez que o usuario enviar um novo post)
function atualizarListaDeTweets() {
  let ul = document.getElementById("lista-posts");
  ul.innerHTML = '';

  tweets.forEach(element => {
    id++;
    let novoPostLi = document.createElement("li");
    novoPostLi.setAttribute('class', 'post');
  
    let propriedadesDiv = document.createElement("div");
    propriedadesDiv.setAttribute('class', 'content-box');
  
    let tweetDiv = document.createElement("div");
    tweetDiv.setAttribute("class", "tweet-content");
  
    tweetDiv.innerHTML = `
      <div class="user-icon-post">
        <img src="${element.icon}">
      </div>
      <div class="div2"> 
        <div class="user-data">
          <div>
            <span id="name">${element.name}</span>
            <span id="username">@${element.username}</span>
          </div>
          <img src="/twitter-icons/png/twitter-delete.png" onclick="deleteTweet(${id})" alt="deletar tweet" class="del" id="del${id}">
        </div>
        <div class="tweet-content">
          <p id="tweet-text">${element.tweetText}</p>
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
      </div>`;
  
    propriedadesDiv.insertAdjacentHTML('afterbegin', tweetDiv.innerHTML);
    novoPostLi.setAttribute('id', `li${id}`);
    novoPostLi.append(propriedadesDiv);
    ul.appendChild(novoPostLi);
  });
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
function deleteTweet(id){

  let ul = document.getElementById("lista-posts");

  let postSelecionado = document.getElementById(`li${id}`);
  if (postSelecionado) {
    let confirmacao = confirm("Deseja excluir o item?");
    if(confirmacao){
      ul.removeChild(postSelecionado);
      tweets.splice(postSelecionado, 1);
    }
  }
};

