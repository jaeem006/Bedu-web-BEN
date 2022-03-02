const util = require('util');
const rl = require('readline').createInterface({
  input : process.stdin,
  output: process.stdout
})

const question = util.promisify(rl.question).bind(rl);

async function suma() {
  try {
    const oper = await question('Operacion ');
    const n1 = await question('Numero 1 ');
    const n2 = await question('Numero 2 ');
    console.log(`Resultado ${Number(n1) + Number(n2)}`);
    rl.close();
  } catch (err) {
    console.error('No respondio', err);
  }
}
suma();