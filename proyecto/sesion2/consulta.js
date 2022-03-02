// var http = require("http");

// var server = http.createServer(
// 	function (request, response) {
// 		response.end('<h1>Hola mundo</h1>')
// 	}); 

// server.listen(3000, function(){
//    console.log("Servidor escuchando en el puerto " + this.address().port);
// });

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


