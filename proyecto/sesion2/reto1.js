const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '/ejemplo_1.txt'), {encoding: 'utf-8'}, function (error, data) {
  if (error) return console.error(error)
  
	var lineas = (data.match(/\n/g) || []).length + 1;
	var chars = (data.match(/./g) || []).length;
	var space = (data.match(/ /g) || []).length;

	console.log('Lineas:',lineas)
	console.log('Caracteres:',chars)
	console.log('Espacios:',space)
})