const { productsServices } = require('../services');

// requisito 01 listar todos os produtos;
const getAll = async (req, res) => {
  const products = await productsServices.getAll();
  res.status(200).json(products);
};

// requisito 01 listar produto pelo id;
const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productsServices.getById(id);
  if (product.status === 404) return res.status(404).json({ message: product.message });
console.log('judas3', product);
  return res.status(200).json(product.message);
};

module.exports = {
  getAll,
  getById,
};
