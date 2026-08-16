const telaCadastro = document.getElementById("tela-cadastro");
const telaLogin = document.getElementById("tela-login");
const btnCadastrar = document.getElementById("btn-cadastrar");
const msgCadastro = document.getElementById("msg-cadastro");
const btnLogar = document.getElementById("btn-acessar");
const msgLogin = document.getElementById("msg-login");
const BANCO_USUARIO = "usuariosCadastrados";


 if(btnCadastrar){

   btnCadastrar.addEventListener( 'click', function(e){
   
   e.preventDefault();

   const novoUsuario = {
      nome : document.getElementById("nome").value,
      email : document.getElementById("email").value,
      usuario : document.getElementById("usuario").value,
      senha : document.getElementById("senha").value,
      confirmaSenha : document.getElementById("confirma-senha").value

   };

   const usuariosCadastrados = JSON.parse(localStorage.getItem(BANCO_USUARIO)) || [];



   if( novoUsuario.nome === "" || novoUsuario.email === "" || novoUsuario.usuario === "" || novoUsuario.senha === "" ){
      mostrarMensagem(msgCadastro, "Preencha todos os campos...", "erro");
      return;
   }  

   if( novoUsuario.senha != novoUsuario.confirmaSenha){
      mostrarMensagem(msgCadastro, "As senhas nâo coincidem. Tente novamente!", "erro");
      return;
   };
   

   if(usuariosCadastrados != null){
      const usuarioExiste = usuariosCadastrados.some(element =>  element.email === novoUsuario.email || element.usuario === novoUsuario.usuario);
      if(usuarioExiste){
            mostrarMensagem( msgCadastro, "Email ou Usuário já utilizados", "erro");
            return;
      }
   }
   usuariosCadastrados.push(novoUsuario);

   localStorage.setItem(BANCO_USUARIO, JSON.stringify(usuariosCadastrados));
   mostrarMensagem( msgCadastro, " Usuário cadastrado com sucesso...", "sucesso");

   setTimeout(function(){
      trocarTela(telaCadastro, telaLogin)
   }, 1500);

   });
}



if(btnLogar) {

   
   btnLogar.addEventListener( 'click', function(e){
   e.preventDefault();

   const usuariosCadastrados = localStorage.getItem(BANCO_USUARIO);

   const usuariosLogin = JSON.parse(usuariosCadastrados);

   let usuarioDigitado = document.getElementById("email-login").value;
   let senhaDigitada = document.getElementById("senha-login").value;
   if( usuariosCadastrados === null){
      mostrarMensagem(msgLogin, "Usuário ainda nâo cadastrado.");
      return;
   };

   const usuarioEncontrado = usuariosLogin.find( element => (element.email === usuarioDigitado || element.usuario === usuarioDigitado) && element.senha === senhaDigitada);

   if(usuarioEncontrado){
       mostrarMensagem(msgLogin,  "Bem vindo "+usuarioEncontrado.nome+ " !", "sucesso");

         const lembrarSenha = document.getElementById("lembrar-senha").checked;
         if(lembrarSenha){
            localStorage.setItem("emailLembrado", usuarioDigitado);
            localStorage.setItem("senhaLembrada", senhaDigitada);
         } else {
            localStorage.removeItem("emailLembrado", usuarioDigitado);
            localStorage.removeItem("senhaLembrada", senhaDigitada);
         }

       setTimeout(function(){
         location.href = "index.html";
       }, 1000);
   } else {
      mostrarMensagem(msgLogin, "Usuário ou senha incorretos!", "erro");
      return;
   };
   });
}



window.addEventListener("DOMContentLoaded", function(){
   const emailLembrado = localStorage.getItem("emailLembrado");
   const senhaLembrada = localStorage.getItem("senhaLembrada");

   if (emailLembrado) {
      document.getElementById("email-login").value = emailLembrado;
      document.getElementById("senha-login").value = senhaLembrada;
      document.getElementById("lembrar-senha").checked = true;
   }
});

function mostrarMensagem(elemento, texto,  tipo){
   elemento.textContent = texto;
   elemento.className = "msg "+tipo
}

function trocarTela(telaEsconder, telaMostrar){
   telaEsconder.classList.add("escondido");
   telaMostrar.classList.remove("escondido");
   
   telaEsconder.querySelector("form").reset();

   msgCadastro.textContent = "";
   msgLogin.textContent = "";

}


document.getElementById("link-nao-conta").addEventListener('click', function(e){
   e.preventDefault();
   trocarTela(telaLogin, telaCadastro);
})

document.getElementById("link-ja-conta").addEventListener('click', function(e){
   e.preventDefault();
   trocarTela(telaCadastro, telaLogin);
})