const process = require('process');

// process.stdin
// process.stdout

const readline = require('readline').createInterface({
	input : process.stdin,
	output: process.stdout
})

// readline.question('¿Quién eres? ', nombre => {
//   console.log(`Hola ${nombre}!`);
//   readline.close();
// });

async function lee() {

	 var nombre = await readline.question('¿Quién eres? ')
	console.log(nombre)
}

lee()