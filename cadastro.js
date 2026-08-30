const BANCO_USUARIO = "usuariosCadastrados";

document.getElementById("btn-cadastrar").addEventListener( 'click', () => {

    const novoUsuario = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        usuario: document.getElementById("usuario").value,
        senha: document.getElementById("senha").value,
        confirmaSenha: document.getElementById("confirma-senha").value
    };

   const usuariosCadastrados = JSON.parse(localStorage.getItem(BANCO_USUARIO)) || [];

    if( novoUsuario.senha != novoUsuario.confirmaSenha){   
        const msgErro = document.getElementById("msg-erro");
        msgErro.textContent = "As senhas não coincidem. Tente novamente.";
        msgErro.style.color = "red"; 

        return;
    }

    if( novoUsuario.nome === "" || novoUsuario.email === "" || novoUsuario.usuario === "" || novoUsuario.senha === "" ){
        const msgErro = document.getElementById("msg-erro");
        msgErro.textContent = "Preencha todos os campos...";
        msgErro.style.color = "red"; 

      return;
   }  

    if(usuariosCadastrados != null){
        const usuarioExiste = usuariosCadastrados.some(element =>  element.email === novoUsuario.email || element.usuario === novoUsuario.usuario);
        
        if(usuarioExiste){
        msgErro.textContent = "Email ou Usuário já utilizados";
        msgErro.style.color = "red"; 
            return;
      }
   }

    usuariosCadastrados.push(novoUsuario);

    localStorage.setItem(BANCO_USUARIO, JSON.stringify(usuariosCadastrados));
    
    location.href = "login.html";

});

