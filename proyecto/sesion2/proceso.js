const process = require('process');

console.log('Id del proceso: ', process.pid);
console.log('Argumentos: ', process.argv);
// console.log('Variables de entorno: ', process.env);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));


