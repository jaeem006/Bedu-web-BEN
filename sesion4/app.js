const express = require('express');
const app = express();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// const gods = [
//   { name: 'Zeus' }, 
//   { name: 'Hades' }, 
//   { name: 'Hermes' }
// ];

app.get('/', (req, res, next) => {
	res.send("<h1>Hola Mundo</h1>");
});

app.get('/gods', (req, res, next) => {
	res.send(gods);
});

const gods = { 
  Zeus: { live: 'Olympus', symbol: 'Thunderbolt' }, 
  Hades : { live : 'Underworld', symbol: 'Cornucopia' } 
};

app.get('/gods/:name', (req, res, next) => {
  res.send(gods[req.params.name]);
});

