// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (false) {
//   } else {
//     reject(Error("Um erro ocorreu na promise"));
//   }
// });

// const retorno = promessa
//   .then((resolucao) => {
//     // console.log(resolucao);
//     return resolucao;
//   })
//   .then((resolucao) => {
//     console.log(resolucao);
//   })
//   .catch((rejeitada) => {
//     console.log(rejeitada);
//   })
//   .finally(() => {
//     console.log("Acabou");
//   });

// console.log(retorno);

// const login = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Usuário Logado");
//   }, 1000);
// });

// const dados = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Dados Carregados");
//   }, 1500);
// });

// const carregouTudo = Promise.race([login, dados]);

// console.log(carregouTudo);

// carregouTudo.then((resolucao) => {
//   console.log(resolucao);
// });
