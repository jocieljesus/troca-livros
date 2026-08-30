const BANCO_USUARIOS = 'usuariosCadastrados';

const formCadastro =  document.getElementById('form-cadastro');

formCadastro.addEventListener('submit', function(event) {
    event.preventDefault();

    const novoUsuario = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        usuario: document.getElementById('usuario').value,
        senha: document.getElementById('senha').value,
        confirmaSenha: document.getElementById('confirma-senha').value
    };
    
    
    const msgErro = document.getElementById('msg-erro');

    if( novoUsuario.senha !== novoUsuario.confirmaSenha) {
        msgErro.textContent = 'As senhas não coincidem. Por favor, tente novamente.';
        msgErro.style.color = 'red';
        return;
    }

    //validacao se usuario ja existe

    const usuariosCadastrados = JSON.parse(localStorage.getItem(BANCO_USUARIOS)) || [];
    const emailExistente = usuariosCadastrados.find(e => e.email === novoUsuario.email);
    const usuarioExistente = usuariosCadastrados.find( u => u.usuario === novoUsuario.usuario);

       
    if(emailExistente) {
        msgErro.textContent = 'Email já cadastrado. Por favor, use outro email.';
        msgErro.style.color = 'red';
        return;
    }

    if(usuarioExistente) {
        msgErro.textContent = 'Usuário já existe. Por favor, escolha outro nome de usuário.';
        msgErro.style.color = 'red';
        return;
    }
 

    usuariosCadastrados.push(novoUsuario);

    localStorage.setItem(BANCO_USUARIOS, JSON.stringify(usuariosCadastrados));
    alert('Cadastro realizado com sucesso!');
    location.href = 'login.html';

});