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
    username: "Spike",
    icon: 'https://cdn.pixabay.com/photo/2016/10/21/19/45/hedgehog-1759027_1280.jpg',
    tweetText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat autem repellat eum sapiente? Dolore alias ipsam minima dignissimos repellendus? Sit vero earum sed unde et velit, optio eos eius."
  },
  {
    name: "leopardo",
    username: "leo",
    icon: 'https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg',
    tweetText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat autem repellat eum sapiente? Dolore alias ipsam minima dignissimos repellendus? Sit vero earum sed unde et velit, optio eos eius."
  }
];

// exibe elementos da lista
var id = 0;
let ul = document.getElementById("lista-posts");

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
          <span id="username">${element.username}</span>
        </div>
        <img src="/twitter-icons/png/twitter-delete.png" alt="deletar tweet" class="del" id="del${id}">
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
/************************************************************************************************************************/
// adiciona novo post

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
          <img src="/twitter-icons/png/twitter-delete.png" alt="deletar tweet" onclick="delete(${id})" class="del" id="del${id}">
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
 function delete(id){
  let botaoDel = document.getElementById(`del${id}`);
  let ul = document.getElementById("lista-posts");
  console.log(document.querySelectorAll(`del${id}`));

  let postSelecionado = document.getElementById(`li${id}`);
  if (postSelecionado) {
    let confirmacao = confirm("Deseja excluir o item?");
    if(confirmacao){
        ul.removeChild(postSelecionado);
    }
  }
};