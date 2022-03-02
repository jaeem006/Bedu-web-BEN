const process = require('process');

var n = process.argv[2]
var m = process.argv[3]
var res = parseInt(n) + parseInt(m);
var texto = n + ' + ' + m + ' = ' + res;

console.log('Programado por: ',process.env.NOMBRE);
console.log(texto)