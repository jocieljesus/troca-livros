const emailSalvo = "jociel@gmail.com";
const senhaSalva = "010203";

const emailDigitado = document.getElementById("email");
const senhaDigitada = document.getElementById("senha");

const msgLogin = document.getElementById("msg-login");

document.getElementById("btn-acessar").addEventListener('click', ()=>{
    
    if( emailDigitado.value == emailSalvo && senhaDigitada.value == senhaSalva ){
        msgLogin.textContent = "Login realizado com sucesso!";
        msgLogin.style.color = "green";
        location.href = "index.html";
        
    }else{
        msgLogin.textContent = "Usuario ou senha incorretos!"
        msgLogin.style.color = "red";
    }

})






