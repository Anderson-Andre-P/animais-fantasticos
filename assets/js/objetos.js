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
// function Pessoa(nome, sobrenome, idade) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.idade = idade;
// }

// Pessoa.prototype.nomeCompleto = function () {
//   return `${this.nome} ${this.sobrenome}`;
// };

// const pessoa_1 = new Pessoa("Anderson", "André", 22);

// console.log(pessoa_1.nomeCompleto());

// // Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
// console.log(Object.getOwnPropertyNames(NodeList.prototype));
// console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
// console.log(Object.getOwnPropertyNames(Document.prototype));

// // Liste os construtores dos dados abaixo
// const li = document.querySelector("li");

// console.log(li.constructor.name); // HTMLLIElement
// console.log(li.click.constructor.name); // Function
// console.log(li.innerText.constructor.name); // String
// console.log(li.value.constructor.name); // Number
// console.log(li.hidden.constructor.name); // Boolean
// console.log(li.offsetLeft.constructor.name); // Number
// li.click(); // Undefined

// // Qual é o contrutor do dado abaixo:
// console.log(li.hidden.constructor.name); // String

// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // Native, Host e User -=-=-=-=-=-=-=
// console.log(typeof Array.from !== "undefined");

// if (typeof Array.from !== "undefined") {
//   console.log("Existe");
// } else {
//   console.log("Não Existe");
// }
// // Exercícios
// // Liste 5 objetos nativos
// Object;
// String;
// Array;
// Function;
// Number;

// // Liste 5 objetos do browser
// Window;
// History;
// Document;
// NodeList;
// HTMLCollection;

// // Liste 2 métodos, propriedades ou objetos presentes no Chrome que não existem no Firefox
// if (typeof window.PaymentRequest !== "undefined") {
//   console.log("Existe");
// } else {
//   console.log("Não Existe");
// }

// document.ontouchstart;
// window.PaymentRequest;

// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // String -=-=-=-=-=-=-=-=-=-=-=-=-=-
// const comida = "Pizza";
// const bebida = new String("Coca-Cola");
// const ano = new String(2022);
// const frase = "A melhor comida";

// console.log(comida.length);
// console.log(bebida.length);

// console.log(comida[0]);
// console.log(bebida[0]);
// console.log(frase[frase.length - 1]); // Última letra

// const linguagem = "JavaScript";

// console.log(linguagem.charAt(0));
// console.log(linguagem.charAt(linguagem.length - 1));

// const fraseFinal = frase + " é " + comida;
// // const fraseFinal = frase.concat(comida)
// console.log(fraseFinal);

// const fruta = "Banana";
// const listaFrutas = "Melancia, Banana, Laranja";
// console.log(listaFrutas.includes(fruta));
// console.log(fruta.includes(listaFrutas));

// console.log(fruta.endsWith("nana"));
// console.log(fruta.startsWith("Ba"));
// console.log(fruta.startsWith("na"));

// const transacao_1 = "Depósito de cliente";
// const transacao_2 = "Depósito de fornecedor";
// const transacao_3 = "Taxa de camisas";

// console.log(transacao_1.slice(0, 3));
// console.log(transacao_2.slice(0, 3));
// console.log(transacao_3.slice(0, 3));

// console.log(transacao_1.slice(12));
// console.log(transacao_2.slice(-4));
// console.log(transacao_3.slice(3, 6));

// const animal = "Cachorro";
// console.log(animal.substring(3, 5));
// console.log(animal.substring(0, 4));
// console.log(animal.substring(4));
// console.log(animal.substring(-3)); // não funciona com valores negativos

// const instrumento = "Guitarra";

// console.log(instrumento.indexOf("r"));
// console.log(instrumento.lastIndexOf("r"));
// console.log(instrumento.indexOf("ta"));

// const listaPreco = ["R$ 99", "R$ 199", "R$ 12000"];
// listaPreco.forEach((preco) => {
//   console.log(preco.padStart(10, "."));
// });

// console.log(listaPreco[0].padStart(10, "."));
// console.log(listaPreco[0].padEnd(10, "."));

// const repetir = "Ta";
// console.log(repetir.repeat(5));

// let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
// listaItens = listaItens.replace(/[ ]+/g, ", ");
// console.log(listaItens);

// let preco = "R$ 1200,43";
// preco = preco.replace(",", ".");
// console.log(preco);

// const arrayItens = listaItens.split(", ");
// console.log(arrayItens);

// const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
// const htmlArray = htmlText.split("div");
// const htmlNovo = htmlArray.join("section");
// console.log(htmlArray);
// console.log(htmlNovo);

// const sexo_1 = "Feminino";
// const sexo_2 = "feminino";
// const sexo_3 = "FEMININO";

// console.log(sexo_1.toLowerCase() === "feminino");
// console.log(sexo_2.toLowerCase() === "feminino");
// console.log(sexo_3.toLowerCase() === "feminino");

// const valor = "  R$ 23.00  ";
// console.log(valor.trim());
// console.log(valor.trimStart());
// console.log(valor.trimEnd());

// // Exercício
// // Utilizando o forEach no array abaixo, some os valores de Taxa e os valores de Recebimento
// const transacoes = [
//   {
//     descricao: "Taxa do Pão",
//     valor: "R$ 39",
//   },
//   {
//     descricao: "Taxa do Mercado",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 99",
//   },
//   {
//     descricao: "Taxa do Banco",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 49",
//   },
// ];

// // Resposta
// let taxaTotal = 0;
// let recebimentoTotal = 0;

// transacoes.forEach((item) => {
//   const numeroLimpo = +item.valor.replace("R$ ", "");
//   if (item.descricao.slice(0, 4) === "Taxa") {
//     taxaTotal += numeroLimpo;
//   } else {
//     recebimentoTotal += numeroLimpo;
//   }
// });
// console.log(taxaTotal);
// console.log(recebimentoTotal);

// // Retorne um array com a lista abaixo
// const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

// const arrayTransportes = transportes.split(";");
// console.log(arrayTransportes);

// // Substitua todos os span's por a's
// let html = `<ul>
//                 <li><span>Sobre</span></li>
//                 <li><span>Produtos</span></li>
//                 <li><span>Contato</span></li>
//               </ul>`;

// html = html.split("span").join("a");
// console.log(html);

// // Retorne o último caracter da frase
// const frase = "Melhor do ano!";
// console.log(frase[frase.length - 1]);
// console.log(frase.slice(-1));

// // Retorne o total de taxas
// const transacoes_2 = [
//   "Taxa de Banco",
//   "   TAXA DO PÃO",
//   "  taxa do mercado",
//   "depósito bancário",
//   "TARIFA especial",
// ];

// let taxasTotal = 0;

// transacoes_2.forEach((item) => {
//   item = item.toLowerCase().trim().slice(0, 4);
//   if (item === "taxa") {
//     taxasTotal++;
//   }
// });

// console.log(taxasTotal);

// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// // Number -=-=-=-=-=-=-=-=-=-=-=-=-=-
// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN(5)); // false
// console.log(Number.isNaN("5")); // false

// console.log(Number.isInteger(20)); // true
// console.log(Number.isInteger(20.6)); // false

// console.log(parseFloat("99.5"));
// console.log(Number.parseFloat("99.5"));
// console.log(Number.parseFloat("100 Reais"));
// console.log(Number.parseFloat("R$ 100"));

// console.log(parseInt("99.5", 10));
// console.log(parseInt(5.6656565, 10));
// console.log(parseInt("100 Reais", 10));

// const preco = 2.99;
// console.log(preco.toFixed());

// const carro = 1000.455;
// console.log(carro.toFixed(2));

// const preco_2 = 1499.49;
// console.log(preco_2.toFixed());

// console.log(preco.toString(10));

// console.log(
//   preco.toLocaleString("en-US", { style: "currency", currency: "USD" })
// );
// console.log(
//   preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
// );

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.LN10);

// console.log(Math.abs(-3));
// console.log(Math.ceil(4.8334));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.8334));
// console.log(Math.floor(4.3));
// console.log(Math.round(4.8334));
// console.log(Math.round(4.3));

// console.log(Math.max(5, 55, 555, 6));
// console.log(Math.min(5, 55, 555, 6));

// console.log(Math.random());
// console.log(Math.floor(Math.random() * 100));
// console.log(Math.floor(Math.random() * 500));

// console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32); // numero entre 72 e 32

// // Exercícios
// // // Retorne um número aleatório entre 1050 e 2000
// const min = 1050;
// const max = 2000;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// // // Retone o maior número da lista abaixo
// const numeros = "4, 5, 20, 8, 9";
// const arrayNumeros = numeros.split(", ");
// const maiorNumero = Math.max(...arrayNumeros);
// console.log(maiorNumero);

// // // Crie uma função para limpar os preços e retornar os números com centavos arredondados, depois retorne a soma total
// const listaPreco = ["R$ 59.99", "R$ 100,222", "R$ 230", "r$ 200"];

// function limparPreco(preco) {
//   preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
//   preco = +preco.toFixed(2);
//   return preco;
// }

// let soma = 0;
// listaPreco.forEach((preco) => {
//   soma += limparPreco(preco);
// });

// console.log(
//   soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
// );

// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
