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
                  <button class="btn-livro btn-trocar" onclick="solicitarTroca('${livro.titulo}')">Trocar Agora</button>
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



// Slider Carrossel


const slides = document.querySelectorAll(".slide");
const containerIndicadores = document.querySelector(".indicadores");

let indiceAtual = 0;

// Cria um "pontinho" indicador para cada slide, dinamicamente
slides.forEach((_, indice) => {
    const ponto = document.createElement("span");
    ponto.classList.add("ponto");
    if (indice === 0) ponto.classList.add("ativo");

    ponto.addEventListener("click", () => irParaSlide(indice));
    containerIndicadores.appendChild(ponto);
});

const pontos = document.querySelectorAll(".ponto");

function mostrarSlide(indice) {
    slides.forEach((slide) => slide.classList.remove("ativo"));
    pontos.forEach((ponto) => ponto.classList.remove("ativo"));

    slides[indice].classList.add("ativo");
    pontos[indice].classList.add("ativo");
}

function mudarSlide(direcao) {
    indiceAtual += direcao;

    // Volta para o início/fim ao passar dos limites
    if (indiceAtual >= slides.length) indiceAtual = 0;
    if (indiceAtual < 0) indiceAtual = slides.length - 1;

    mostrarSlide(indiceAtual);
}

function irParaSlide(indice) {
    indiceAtual = indice;
    mostrarSlide(indiceAtual);
}

// Troca automática a cada 5 segundos
/*setInterval(() => mudarSlide(1), 5000);

let autoplay = setInterval(() => mudarSlide(1), 5000);
const carrossel = document.querySelector(".carrossel");

carrossel.addEventListener("mouseenter", () => clearInterval(autoplay));
carrossel.addEventListener("mouseleave", () => {
    autoplay = setInterval(() => mudarSlide(1), 5000);
});*/



// MODAL

  // Seleciona os elementos principais do modal
    const modal = document.getElementById('modalLivro');
    const modalCapa = document.getElementById('modalCapa');
    const modalGenero = document.getElementById('modalGenero');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalAutor = document.getElementById('modalAutor');
    const modalEstado = document.getElementById('modalEstado');
    const modalSinopse = document.getElementById('modalSinopse');

    // Para cada card de livro, escuta o clique no botão "Quero trocar"
    document.querySelectorAll('.card-livro').forEach((card) => {
      const botao = card.querySelector('.btn-trocar');

      botao.addEventListener('click', () => {
        // Preenche o modal com os dados (data-*) do card clicado
        modalCapa.textContent = card.dataset.capa;
        modalGenero.textContent = card.dataset.genero;
        modalTitulo.textContent = card.dataset.titulo;
        modalAutor.textContent = card.dataset.autor;
        modalEstado.textContent = card.dataset.estado;
        modalSinopse.textContent = card.dataset.sinopse;

        // Exibe o modal
        modal.classList.add('modal-ativo');
      });
    });

    // Fecha o modal ao clicar no "x"
    document.getElementById('modalFechar').addEventListener('click', () => {
      modal.classList.remove('modal-ativo');
    });

    // Fecha o modal ao clicar em "Cancelar"
    document.getElementById('modalCancelar').addEventListener('click', () => {
      modal.classList.remove('modal-ativo');
    });

    // Fecha o modal ao clicar fora da caixa (na área escura)
    modal.addEventListener('click', (evento) => {
      if (evento.target === modal) {
        modal.classList.remove('modal-ativo');
      }
    });

    // Confirmação simples (pode futuramente abrir um formulário de contato)
    document.getElementById('modalConfirmar').addEventListener('click', () => {
      alert('Interesse registrado! Em breve o outro leitor entrará em contato.');
      modal.classList.remove('modal-ativo');
    });

    // Fecha o modal com a tecla ESC
    document.addEventListener('keydown', (evento) => {
      if (evento.key === 'Escape') {
        modal.classList.remove('modal-ativo');
      }
    });