const BANCO_USUARIOS = 'usuariosCadastrados';

const formLogin = document.getElementById('form-login');

formLogin.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usuario = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


    const msgErro = document.getElementById('msg-erro');

    const usuariosCadastrados = JSON.parse(localStorage.getItem(BANCO_USUARIOS)) || [];
    const usuarioEncontrado = usuariosCadastrados.find(u => u.usuario === usuario && u.senha === senha || u.email === usuario && u.senha === senha);

    if(!usuarioEncontrado) {
        msgErro.textContent = 'Usuário ou senha incorretos.';
        msgErro.style.color = 'red';
        return;
    }

    alert('Login realizado com sucesso!');
    location.href = 'index.html';

});
