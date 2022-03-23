const express = require('express');
const app = express();
const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize(
  'd87k39vjolgfg',
  'jiruoxnjyxlzco', 
  '83cfa2e888073541d3e7a0cb9a824c7f52cfcbc3f0fa018ab0646401bedad1f6',
{
  host: 'ec2-3-208-121-149.compute-1.amazonaws.com',
  dialect: 'postgres',
  native: true,
  ssl: true
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
  sequelize.authenticate();
  console.log('La conexion fue exitosa');
} catch (error) {
  console.error('Hubo un problema con la conexión', error);
}

const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.TEXT
  },
  precio: {
    type: DataTypes.REAL
  },
  cat: {
    type: DataTypes.TEXT
  },
  desc: {
    type: DataTypes.TEXT
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Producto.findAll({
  limit: 10,
  where: {
    precio : {
      [Op.gte] : 350
    }
  }
})
.then(products =>
  console.log("All products:", JSON.stringify(products, null, 2))
)

// const PORT = 4001;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// app.get('/', (req, res, next) => {
// 	res.send("<h1>Hola Node</h1>");
// });

// app.get('/gods', (req, res, next) => {
// 	res.send(gods);
// });

// const gods = { 
//   Zeus: { live: 'Olympus', symbol: 'Thunderbolt' }, 
//   Hades : { live : 'Underworld', symbol: 'Cornucopia' } 
// };

// // route parameters

// app.get('/gods/:name', (req, res, next) => {
// // /gods/Zeus
// // /gods/Hades
//   res.send(gods[req.params.name]);
//   console.log(req.query)
//   console.log(req.body)
// });

// //  Query String
// // http://localhost:4001/gods/Zeus?live=Underworld&symbol=eagle&age=25

// // {
// //   live : "Underworld",
// //   symbo; : "eagle",
// //   age : 25
// // }

// app.put('gods/:name', (req, res, next) => {
//   const god = req.body;
//   gods[req.params.name] = god;
//   res.send(gods);
// })

// app.post('/gods/:name', (req, res, next) => {
//   const name = req.params.name
//   const newGod = req.body;
//   gods[name] = newGod;
//   res.status(200).send(gods);
// })

// app.delete('gods/:name', (req, res, next) =>{
//   const name = req.params.name;
//   if (delete gods[name]){
//     res.send(gods)
//   } else {
//     res.status(500)
//   }
// })



