function newPost(){
  let ul = document.getElementById("lista-posts");
  let novoPost = document.createElement("li");
  let content = document.getElementById("text-tweet").value; 
  let paragrafo = document.createElement("p");
  paragrafo.textContent = content;
  novoPost.appendChild(paragrafo);
  ul.appendChild(novoPost);
}