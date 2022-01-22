// // Constructor Function -=-=-=-=-=-=

// function Carro() {
//   this.marca = "Marca";
//   this.preco = 0;
// }

// const honda = new Carro();
// honda.marca = "Honda";
// honda.preco = 99999;

// const fiat = new Carro();
// fiat.marca = "Fiat";
// fiat.preco = 69999;

// function Moto(marca, preco) {
//   this.taxa = 1.6;
//   const precoFinal = preco * this.taxa;
//   this.marca = marca;
//   this.preco = precoFinal;
// }

// const bmw = new Moto("BMW", 75999);

// const yamaha = new Moto("Yamaha", 25000);

// // Exemplo Real
// function Dom(seletor) {
//   //   this.seletor = seletor;
//   this.element = function () {
//     return document.querySelector(seletor);
//   };
//   this.ativo = function (classe) {
//     this.element().classList.add(classe);
//   };
// }

// const li = new Dom("li");
// const ul = new Dom("ul");

// li.ativo("ativo");
// ul.ativo("ativo");

// const lastLi = new Dom("li:last-child");
// lastLi.ativo("ativado");

// // Exercício
// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: "Nome pessoa",
//   idade: 0,
//   andar() {
//     console.log(this.nome + " andou.");
//   },
// };

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.andar = function () {
//     console.log(this.nome + " andou.");
//   };
// }

// Crie três pessoas:
// // - João - 20 anos
// const joao = new Pessoa("João", 20);
// joao.andar();

// // - Maria - 25 anos
// const maria = new Pessoa("Maria", 25);

// // - Bruno - 15 anos
// const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para a manipulação de listas de elementos do Dom. Deve conter as seguintes propriedades e métodos:
// - Elementos, retorna NodeList com os elementos selecionados
// - addClass(classe), adiciona a classe a todos os elementos
// - removeClass(classe), remove a classe a todos os elementos
// function Dom(seletor) {
//   const elementList = document.querySelectorAll(`${seletor} li`);
//   this.elements = elementList;
//   this.addClass = function (classe) {
//     elementList.forEach((element) => {
//       element.classList.add(classe);
//     });
//   };
//   this.removeClass = function (classe) {
//     elementList.forEach((element) => {
//       element.classList.remove(classe);
//     });
//   };
// }

// const listaItens = new Dom("ul");
// listaItens.addClass("ativado");
// listaItens.removeClass("ativado");

// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // Prototype -=-=-=-=-=-=
// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.abracar = function () {
//     return "abaçou";
//   };
//   this.andar = function () {
//     return "Andou pelo objeto";
//   };
// }

// Pessoa.prototype.andar = function () {
//   return this.nome + " andou.";
// };

// Pessoa.prototype.nadar = function () {
//   return this.nome + " nadou.";
// };

// const andre = new Pessoa("André", 22);

// console.log(Pessoa.prototype); // retorna o objeto
// console.log(andre.prototype); // undefined

// const pais = "Brasil";
// const cidade = new String("Itjubá");

// pais.charAt(0); // B
// cidade.charAt(0); // I

// String.prototype;

// const listaAnimais = ["Cachorro", "Gato", "Macaco", "Faizão"];

// const lista = document.querySelectorAll("li");
// const listaArray_1 = Array.prototype.slice.call(lista);
// const listaArray_2 = Array.from(lista);

// // // Retorna uma lista com os métodos / propriedades
// Object.getOwnPropertyNames(Array);
// Object.getOwnPropertyNames(Array.prototype);
// const Carro = {
//   marca: "Ford",
//   preco: 2000,
//   acelerar() {
//     return true;
//   },
// };

// Carro.acelerar.constructor.name; // Nome do construtor
// Carro; // Object
// Carro.marca; // String
// Carro.preco; // Number
// Carro.acelerar; // Function
// Carro.acelerar(); // Boolean (por causa do retorno)
// Carro.marca.charAt; // Function
// Carro.marca.charAt(0); // String

// // Exercícios
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const pessoa_1 = new Pessoa("Anderson", "André", 22);

console.log(pessoa_1.nomeCompleto());

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

console.log(li.constructor.name); // HTMLLIElement
console.log(li.click.constructor.name); // Function
console.log(li.innerText.constructor.name); // String
console.log(li.value.constructor.name); // Number
console.log(li.hidden.constructor.name); // Boolean
console.log(li.offsetLeft.constructor.name); // Number
li.click(); // Undefined

// Qual é o contrutor do dado abaixo:
console.log(li.hidden.constructor.name); // String

// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
