function login() {
    alert("Login realizado")
    window.location.href = "./index.html";
}

function validar(){
    let username = formulario.username.value;
    let senha = formulario.senha.value;

    if (username === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
    } else if (username === "choquei" && senha === "senha123") {
        login();
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
}