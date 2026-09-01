const BANCO_USUARIO = "usuariosCadastrados";
const usuariosCadastrados = JSON.parse(localStorage.getItem(BANCO_USUARIO)) || [];

document.getElementById("form-login").addEventListener('submit', (event)=>{
    event.preventDefault();

    
    const emailDigitado = document.getElementById("email").value;
    const senhaDigitada = document.getElementById("senha").value;

    const msgLogin = document.getElementById("msg-login");

 
    const usuarioEncontrado = usuariosCadastrados.find( u => u.email === emailDigitado && u.senha === senhaDigitada || u.usuario === emailDigitado && u.senha === senhaDigitada);

    if(!usuarioEncontrado){
        msgLogin.textContent = "Usuario ou senha incorretos!"
        msgLogin.style.color = "red";
        
    }else{
        msgLogin.textContent = "Login realizado com sucesso!";
        msgLogin.style.color = "green";
        location.href = "index.html";
    }

})






