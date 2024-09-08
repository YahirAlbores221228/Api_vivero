const router = require('express').Router();

const { createproduct, getproduct, updateproduct, removeproduct } = require('../controllers/catalogproducts');
const {createorder, getorder} = require('../controllers/orderproducts');

// creamos rutas para cada una de las funciones que creamos en el controlador
router.post('/catalogproducts', createproduct);
router.get('/catalogproducts', getproduct);
router.put('/catalogproducts/:id', updateproduct);
router.delete('/catalogproducts/:id', removeproduct);

//creamos rutas para hacer el pedido de productos
router.post('/orderproduct', createorder);
router.get('/orderproduct', getorder);

module.exports = router;