let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let numero = Math.random();
    if (numero >= 0.5) resolve("Éxito");
    reject("Error");
  }, 2000);
});
promesa.then((data) => console.log(data)).catch((data) => console.log(data));
console.log("Inicio");