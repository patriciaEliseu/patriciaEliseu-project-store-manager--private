const { productsServices } = require('../services');

// requisito 01
const getAll = async (req, res) => {
  const products = await productsServices.getAll();
  res.status(200).json(products);
};

module.exports = {
  getAll,
};
