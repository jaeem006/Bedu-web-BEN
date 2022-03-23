const router = require('express').Router();

router.get('/', (req,res) => {
	res.send("Bienvenido a nuestra API")
});

router.use('/productos', require('./productos'))
router.use('/usuarios', require('./usuarios'))

module.exports = router;