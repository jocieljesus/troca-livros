const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener( 'click', () => {
    nomeSaida.textContent = nomeEntrada.value;
});

btnTroca.addEventListener( 'mouseenter', function(){
    nomeSaida.style.color = "#47893a";
});

btnTroca.addEventListener( 'mouseout', () => {
    nomeSaida.style.color = "#000000";
});

// Trocando a cor da caixa

const btnVerde = document.getElementById("btn_verde"); 
const btnAmarelo = document.getElementById("btn_amarelo"); 
const btnAzul = document.getElementById("btn_azul"); 
const caixa = document.getElementById("caixa");

btnVerde.addEventListener('click', () => {
    caixa.style.backgroundColor = "green";
});

btnAmarelo.addEventListener('click', () => {
    caixa.style.backgroundColor = "yellow";
});

btnAzul.addEventListener('click', () => {
    caixa.style.backgroundColor = "blue";
});
 
// Simulando adição e subtraçao de valor
const valorReal = document.getElementById("valor_real");
let contador = 0;

document.getElementById("btn_menos").addEventListener( 'click', () => {
    if( contador > 0){
        contador--;
        valorReal.textContent = contador;
    }
});

document.getElementById("btn_mais").addEventListener( 'click', () => {
    contador++;
    valorReal.textContent = contador;
});

// Adicionando Livros

const nomeLivro = document.getElementById("nome_livro");
const listaLivros = document.getElementById("lista_livros")

document.getElementById("adiciona_livro").addEventListener('click', ()=>{
    
    const novoLivro = document.createElement("li");
    novoLivro.textContent = nomeLivro.value;
   
    const novoButtton = document.createElement("button");
    novoButtton.textContent = "X"; 
    novoButtton.style.marginLeft = "20px";
    novoLivro.appendChild(novoButtton);

    listaLivros.appendChild(novoLivro);

    novoButtton.addEventListener( 'click', () => {
        novoLivro.remove();
    })

    nomeLivro.value = "";

});


document.getElementById("remover_livro").addEventListener('click', ()=>{
    listaLivros.innerHTML = "";
});


