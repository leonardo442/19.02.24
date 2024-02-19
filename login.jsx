var login = "teste";
var senha = "teste";

var txtLogin = document.getElementById("txtLogin");
var txtSenha = document.getElementById("txtSenha");

export const fazerLogin = (e) => {
    if(txtLogin.value == login && txtSenha == senha) {
        console.log("Acesso liberado");
    } else{
        console.log("Login ou senha invalidos");
    }
}
