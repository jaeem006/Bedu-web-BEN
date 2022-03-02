const process = require('process');

const operacion = process.argv[2];
const num1 = process.argv[3];
const num2 = process.argv[4];

// console.log(process.argv

switch(operacion){
	case 'suma':
		console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`)
    	break;
	case 'resta':
		console.log(`${num1} - ${num2} = ${num1 - num2}`)
    	break;
	case 'multiplica':
		console.log(`${num1} x ${num2} = ${num1 * num2}`)
    	break;
	case 'divide':
		console.log(`${num1} / ${num2} = ${num1 / num2}`)
    	break;
    default:
    	console.log(operacion)
    }
