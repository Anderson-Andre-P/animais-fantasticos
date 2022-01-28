// const doc = fetch("./arquivo.txt");

// doc
//   .then((resolucao) => {
//     //   resolucao.text().then((body) => {
//     //     console.log(body);
//     //   });
//     return resolucao.text();
//   })
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body;
//     console.log(body);
//   });

// https://viacep.com.br/ws/01001000/json/
// const cep = fetch("https://viacep.com.br/ws/01001000/json/");
// cep
//   .then((resolucao) => resolucao.json())
//   .then((body) => {
//     console.log(body);
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body.logradouro;
//   });

// const estilo = fetch("./style.css");
// estilo
//   .then((resolucao) => resolucao.text())
//   .then((body) => {
//     console.log(body);
//     const conteudo = document.querySelector(".conteudo");
//     const style = document.createElement("style");
//     style.innerHTML = body;
//     conteudo.appendChild(style);
//   });

// const sobre = fetch("./sobre.html");

// const div = document.createElement("div");

// sobre
//   .then((r) => r.text())
//   .then((body) => {
//     div.innerHTML = body;
//     const titulo = div.querySelector("h1");
//     document.querySelector("h1").innerText = titulo.innerText;
//   });

// const div = createElement("div");

// const div = document.createElement("div");
// fetch("./imagem.png")
//   .then((response) => response.blob())
//   .then((imgBlob) => {
//     const blobUrl = URL.createObjectURL(imgBlob);
//     console.log(blobUrl);
//   });

// const div = document.createElement("div");
// fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
//   console.log(response.status, response.ok);
//   if (response.status === 404) {
//     console.log("Página não encontrada");
//   }
// });
