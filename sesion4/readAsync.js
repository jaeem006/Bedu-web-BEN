const util = require('util');
const rl = require('readline').createInterface({
  input : process.stdin,
  output: process.stdout
})
const question = util.promisify(rl.question).bind(rl);

async function questionExample() {
  try {
    const nombre = await question('¿Quién eres? ');
    console.log(`Hola ${nombre}!`);
    rl.close();
  } catch (err) {
    console.error('No respondio', err);
  }
}
questionExample();