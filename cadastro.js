const BANCO_USUARIO = "usuariosCadastrados";

document.getElementById("form-cadastro").addEventListener( 'submit', (event) => {

    event.preventDefault();

    const novoUsuario = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        usuario: document.getElementById("usuario").value,
        senha: document.getElementById("senha").value,
        confirmaSenha: document.getElementById("confirma-senha").value
    };

    const usuariosCadastrados = JSON.parse(localStorage.getItem(BANCO_USUARIO)) || [];
    const msgErro = document.getElementById("msg-erro");
    //Validação de senhas diferentes 
    if( novoUsuario.senha != novoUsuario.confirmaSenha){  
        msgErro.textContent = "As senhas não coincidem. Tente novamente.";
        msgErro.style.color = "red"; 

        return;
    }

      // validação que os campos estão preenchidos
    if( novoUsuario.nome === "" || novoUsuario.email === "" || novoUsuario.usuario === "" || novoUsuario.senha === "" ){
        msgErro.textContent = "Preencha todos os campos...";
        msgErro.style.color = "red"; 

      return;
   }  

   //Validação se o usuário já existe
    if(usuariosCadastrados != null){
        const emailExiste = usuariosCadastrados.some(element =>  element.email === novoUsuario.email);

        const usuarioExiste = usuariosCadastrados.some(element =>  element.usuario === novoUsuario.usuario);

         if(emailExiste){
            msgErro.textContent = "Email já utilizados";
            msgErro.style.color = "red"; 
            return;
        }
        
        if(usuarioExiste){
            msgErro.textContent = "Usuário já utilizados";
            msgErro.style.color = "red"; 
            return;
        }
   }

    usuariosCadastrados.push(novoUsuario);

    localStorage.setItem(BANCO_USUARIO, JSON.stringify(usuariosCadastrados));

    alert("Cadastro realizado com sucesso!");
    
    location.href = "login.html";

});

