// // const animaisSection = document.getElementById("animais");
// // console.log(animaisSection);

// // const gridSection = document.getElementsByClassName("grid-section");
// // console.log(gridSection);

// // const ul = document.getElementsByTagName("ul");
// // console.log(ul);

// // const animais = document.querySelector(".animais");
// // console.log(animais);

// // const primeiraUl = document.querySelector("ul");

// // const primeiraLi = primeiraUl.querySelector("li");
// // console.log(primeiraLi);

// // // primeiraUl.classList.add("primeiraUl");

// // const linkInterno = document.querySelector('[href^="#"]');
// // console.log(linkInterno);

// // const animaisImg = document.querySelectorAll(".animais img");
// // console.log(animaisImg);

// // const gridSectionCollection = document.getElementsByClassName("grid-section");
// // const gridSectionNode = document.querySelectorAll(".grid-section");
// // console.log(gridSectionCollection);
// // console.log(gridSectionNode);

// // // Retorne todas as imagens do site
// const imagens = document.querySelectorAll("img");
// console.log(imagens);

// imagens.forEach((item, index, array) => {
//   console.log(item);
//   console.log(index);
//   console.log(array);
// });

// // // Retorne no console apenas as imagens que começam com imagem
// const imagensPalavraInicial = document.querySelectorAll(
//   'img[src^="./assets/img/imagem"]'
// );
// console.log(imagensPalavraInicial);

// // // Selecione todos os links internos (onde o href começa com #)
// const linkHref = document.querySelectorAll('[href^="#"]');
// console.log(linkHref);

// // // Selecione o primeiro h2 dentro de .animais-descricao
// const primeiroH2 = document.querySelector(".animais-descricao h2");
// console.log(primeiroH2);

// // // Selecione o último p do site
// const paragrafos = document.querySelectorAll("p");
// console.log(paragrafos[paragrafos.length - 1]);

// const todosParagrafos = document.querySelectorAll("p");
// todosParagrafos.forEach((item) => {
//   console.log(item);
//   console.log(item.innerText);
// });

// const menu = document.querySelector(".menu");

// menu.classList.add("ativo");
// menu.classList.toggle("black");

// const animais = document.querySelector(".animais");
// console.log(animais.attributes);

// const img = document.querySelector("img");
// console.log(img.getAttribute("alt"));

// // Adicione a classe ativo a todos os itens do menu
// const addAtivo = document.querySelectorAll(".menu a");
// addAtivo.forEach((item) => {
//   item.classList.add("ativo");
// });
// // Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// addAtivo.forEach((item) => {
//   item.classList.remove("ativo");
// });
// addAtivo[0].classList.add("ativo");

// // Verifique se as imagens possuem o atributo alt
// const imagensAlt = document.querySelectorAll("img");
// imagensAlt.forEach((item) => {
//   const possuiAtt = item.hasAttribute("alt");
//   console.log(possuiAtt);
// });

// // Modifique o href do link externo no menu
// const link = document.querySelector('a[href^="http"]');
// link.setAttribute("href", "https://google.com/");
// console.log(link);

// const listaAnimais = document.querySelector(".animais-lista");
// const height = listaAnimais.scrollHeight;
// const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);

// const rect = listaAnimais.getBoundingClientRect();
// console.log(rect);

// console.log(window.innerWidth, window.outerWidth, window.pageYOffset);

// const small = window.matchMedia("(max-width: 600px)");
// if (small.matches) {
//   console.log("Tela menor que 600px");
// } else {
//   console.log("Tela maior que 600px");
// }

// // Verifique a distância da primeira imagem em relação ao topo da página
// const img = document.querySelector("img");
// const imgTop = img.offsetTop;
// console.log(imgTop);

// // Retorne a soma da largura de todas as imagens
// function somaImagens() {
//   const todasImg = document.querySelectorAll("img");
//   let soma = 0;
//   todasImg.forEach((images) => {
//     soma += images.offsetWidth;
//     // console.log(images.offsetWidth);
//   });
//   console.log(soma);
// }
// window.onload = function () {
//   somaImagens();
// };

// // Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo (48px/48px de acordo com o google)
// const linksA = document.querySelectorAll("a");
// linksA.forEach((link) => {
//   const linkWidth = link.offsetWidth;
//   const linkHeight = link.offsetHeight;
//   if (linkWidth >= 48 && linkHeight >= 48) {
//     console.log(link, "possui acessibilidade");
//   } else {
//     console.log(link, "não possui acessibilidade");
//   }
// });
// console.log(linksA);

// // Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
// const browserSmall = window.matchMedia("(max-width: 720px)").matches;
// const menuSelecionado = document.querySelector(".menu");
// if (browserSmall) {
//   menuSelecionado.classList.add("menu-mobile");
// } else {
//   menuSelecionado.classList.remove("menu-mobile");
// }

// const img = document.querySelector("img");
// img.addEventListener("click", () => {
//   console.log("clicou");
// });

// function callback(event) {
//   console.log(event);
// }

// img.addEventListener("click", callback);

// const imagensAnimaisLista = document.querySelector(".animais-lista");

// function callbackLista(event) {
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.type);
//   console.log(event.path);
// }

// imagensAnimaisLista.addEventListener("click", callbackLista);

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event) {
//   event.preventDefault();
//   //   console.log("Clicou");
//   console.log(this);
//   console.log(event.currentTarget);
// }

// linkExterno.addEventListener("click", handleLinkExterno);

// const h1 = document.querySelector("h1");

// function handleEvent(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mouseenter", handleEvent);
// h1.addEventListener("mousemove", handleEvent);

// window.addEventListener("scroll", handleEvent);
// window.addEventListener("resize", handleEvent);
// window.addEventListener("keydown", handleEvent);

// function handleKeyboard(event) {
//   if (event.key === "a") {
//     document.body.classList.toggle("azul");
//   } else if (event.key === "v") {
//     document.body.classList.toggle("vermelho");
//   }
// }

// window.addEventListener("keydown", handleKeyboard);

// const imgs = document.querySelectorAll("img");

// function handleImg(event) {
//   console.log(event.currentTarget.getAttribute("src"));
// }

// imgs.forEach((img) => {
//   img.addEventListener("click", handleImg);
// });

// // Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicando e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
// const linksInternos = document.querySelectorAll('a[href^="#"]');

// function handleLink(event) {
//   event.preventDefault();
//   linksInternos.forEach((item) => {
//     item.classList.remove("ativo");
//   });
//   event.currentTarget.classList.add("ativo");
// }

// linksInternos.forEach((links) => {
//   links.addEventListener("click", handleLink);
// });

// // Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
// const todosElementos = document.querySelectorAll("body *");

// function handleElemento(event) {
//   event.currentTarget.remove();
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElemento);
// });

// // Utilizando o código anterior, ao invés de mostrar no console remova o elemento que está sendo clicado, o método remove() remove um elemento

// // Se o usuário clicar na tecla T, aumente todo o texto do site

// function handleClick(event) {
//   if (event.key === "t") {
//     document.documentElement.classList.toggle("textomaior");
//   }
// }

// window.addEventListener("keydown", handleClick);

// const menu = document.querySelector(".menu");
// menu.outerHTML; // todo o html do elementos
// menu.innerHTML; // html inteiro
// menu.innerText; // texto, sem tags

// menu.innerText = "<p>TEXTO</p>"; // tag vai como texto
// menu.innerHTML = "<p>TEXTO</p>"; // tag vai como tag

// const h1 = document.querySelector("h1");

// const animaisLista = document.querySelector(".animais-descricao");

// console.log(h1.innerText);
// console.log(h1.innerHTML);

// console.log(animaisLista.innerText);
// console.log(animaisLista.innerHTML);

// h1.innerHTML = "<p>Novo Título</p>";
// h1.innerText = "<p>Novo Título</p>";

// const lista = document.querySelector(".animais-lista");

// console.log(lista.parentElement); // pai
// console.log(lista.parentElement.parentElement); // pai do pai
// console.log(lista.previousElementSibling); // elemento acima
// lista.nextElementSibling; // elemento abaixo

// console.log(lista.children); // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // Último filho

// lista.querySelectorAll("li"); // todas as li's
// console.log(lista.querySelector("li:last-child")); // último filho

// lista.previousElementSibling; // elemento acima
// lista.previousSibling; // node acima

// lista.firstChild; // primeiro node child
// lista.childNodes; // todos os node child

// const lista = document.querySelector(".animais-lista");
// const animais = document.querySelector(".animais");
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");
// const mapa = contato.querySelector(".mapa");

// contato.insertBefore(animais, mapa);

// contato.insertBefore(lista, titulo);
// contato.removeChild(titulo);
// contato.replaceChild(lista, mapa);

// const novoH1 = document.createElement("h1");
// novoH1.innerText = "Novo Título";
// novoH1.classList.add("titulo");
// mapa.appendChild(novoH1);

// console.log(novoH1);

// const titulo = document.querySelector("h1");
// const titulo2 = document.querySelector("h1");
// const novoTitulo = titulo;

// const cloneTitulo = titulo.cloneNode(true);
// const contato = document.querySelector(".contato");
// contato.appendChild(cloneTitulo);

// // // Duplique o menu e adicione ele em copy
// const menu = document.querySelector(".menu");
// const copy = document.querySelector(".copy");

// const cloneMenu = menu.cloneNode(true);

// copy.appendChild(cloneMenu);

// // // Selecione o primeiro DT da DL de Faq
// const faq = document.querySelector(".faq");
// const primeiroDt = faq.querySelector("dt");

// // // Selecione o DD referente ao primeiro DT
// const proximoDd = primeiroDt.nextElementSibling;
// console.log(proximoDd);

// // // Substitua o conteúdo html de faq de .animais
// const animais = document.querySelector(".animais");
// faq.innerHTML = animais.innerHTML;

// // Datasets
// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
