// 1. Base de dados da aplicação (Array com os dados reais do ConnectBook)
const livros = [
    {
        titulo: "Use a Cabeça Java",
        categoria: "Tecnologia",
        autores: "Kathy Sierra, Bert Bates & Trisha Gee",
        imagem: "img/use-a-cabeça-java.jpg"
    },
    {
        titulo: "Boa Noite Pum Pum",
        categoria: "Mangá",
        autores: "Inio Asano",
        imagem: "img/boa-noite-pum-pum.jpg"
    },
    {
        titulo: "Harry Potter",
        categoria: "Ficção",
        autores: "J.K. Rowling",
        imagem: "img/harry-potter.jpg"
    },
    {
        titulo: "A República",
        categoria: "Filosofia",
        autores: "Platão",
        imagem: "img/a-republica.jpg"
    },
    {
        titulo: "Memórias Póstumas de Brás Cubas",
        categoria: "Literatura",
        autores: "Machado de Assis",
        imagem: "img/memorias-postumas.jpg"
    },
    {
        titulo: "Python para Leigos",
        categoria: "Tecnologia",
        autores: "John Paul Mueller",
        imagem: "img/python-para-leigos.jpg"
    },
    {
        titulo: "Memórias do Subsolo",
        categoria: "Ficção",
        autores: "Fiódor Dostoiévski",
        imagem: "img/memorias-do-subsolo.jpg"
    },
    {
        titulo: "Os Miseráveis",
        categoria: "Ficção",
        autores: "Victor Hugo",
        imagem: "img/os-miseraveis.jpg"
    }
];


const containerLivros = document.querySelector("#livros");
const inputBusca = document.querySelector(".campo-busca");

function renderizarLivros(listaParaExibir = livros){

      containerLivros.innerHTML = "";

      if (listaParaExibir.length === 0){
         containerLivros.innerHTML = '<p class="sem-resultados">Nenhum livro encontrado.</p>';
         return;
      } 


      listaParaExibir.forEach( (livro) => {

         const cardHTML = `
            <div class="card-livro">
               <img src="${livro.imagem}" alt="" class="foto-livro">
               <div class="info-livro">
                  <span class="categoria-livro"> ${livro.categoria} </span>
                  <h3 class="titulo-livro"> ${livro.titulo} </h3>
                  <p class="autores-livro"> ${livro.autores}</p>
                  <button class="btn-livro" onclick="solicitarTroca('${livro.titulo}')">Trocar Agora</button>
               </div>
            </div>
         `;

         containerLivros.innerHTML += cardHTML;

      });
}


function filtrarLivros(){
   const termo = inputBusca.value.toLowerCase().trim();

   const livrosFiltrados = livros.filter( (livro) =>{
      const titulo = livro.titulo.toLowerCase();
      const categoria = livro.categoria.toLowerCase();
      const autores = livro.autores.toLowerCase();

      return titulo.includes(termo) || categoria.includes(termo) || autores.includes(termo);
   });
   renderizarLivros(livrosFiltrados);
}

inputBusca.addEventListener("input", filtrarLivros);

function solicitarTroca(titulo){
   alert(`Solicitação de troca enviada para o livro: "${titulo}"!`);
}

renderizarLivros();