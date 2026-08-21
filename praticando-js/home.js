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
 

