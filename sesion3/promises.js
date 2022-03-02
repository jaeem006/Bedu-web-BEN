let promesa = new Promise ((resolve, reject) => {
  setTimeout(() => {
    let numero = Math.random();
    if (numero >= 0.5) resolve(numero);
    reject(numero);
  }, 2000);
});

promesa
  .then((data) => {
    console.log("Resolve",data);
    promesa2.then(data.info).catch
  })
  .catch((err) => console.log("Error",err));

console.log("Inicio");

const { values } = require("underscore");

let promesa1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "uno");
});

let promesa2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "dos");
});

let promesa3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 3);
});

Promise.all([promesa1, promesa2, promesa3]).then((valores) => {
    console.log(valores[1]);
})


