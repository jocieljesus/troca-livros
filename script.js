window.confirm(" Voce quer se apresentar");

var nome = window.prompt("Qual é o seu nome?");
let idade = window.prompt('Qual a sua idade?');
const genero =  window.prompt("Qual o seu genero?");

window.alert( "Satisfação em te conhecer, "+ nome +", você tem "+ idade +" e é do genero "+genero+"!");

window.alert(`Satisfação em te conhecer ${nome}, você tem ${idade} e é do gênero ${genero}!`)



document.getElementById("btn-ver-livros").addEventListener( 'click', ()=> {
    const block = document.getElementById("block-scroll");
    block.style.overflow = "auto";
});