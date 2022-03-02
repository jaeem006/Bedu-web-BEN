// var process = require('process');

// console.log('Id del proceso:', process.pid)
// process.stdin.setRawMode(true);
// process.stdin.resume();
// process.stdin.on('data', process.exit.bind(process, 0));

// console.log('Id del proceso:', process.pid)
// console.log('Variables de entorno:', process.argv)

// process.stdin.setRawMode(true);
// process.stdin.resume();
// process.stdin.on('data', process.exit.bind(process, 0)); // Al presionar cualquier letra salimos

const https = require('https');
function getAPOD() {
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  resp.setEncoding('utf8');
  //trozos de información recibida
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // La respuesta completa ha sido recibida. Imprime el resultado
  resp.on('end', () => {
    let body = JSON.parse(data);
    console.log(' Título:',body.explanation);
    console.log('\n Explicación', body.explanation);
    console.log('\n URL:', body.url);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
}

getAPOD();
