const express = require('express');
const { productsControllers } = require('../controllers');
// const { product }
const router = express.Router();

// requisito 01 endpoint /products;
router.get('/', productsControllers.getAll);

module.exports = router;
