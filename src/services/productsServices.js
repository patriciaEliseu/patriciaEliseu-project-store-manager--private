// const Joi = require('joi');
const { productsModels } = require('../models');

// const productSchema = Joi.object({
  // name: Joi.string().min(2).max(30).required(),
// });

// requisito 01 listar todos os produtos;
const getAll = async () => {
  const products = await productsModels.getAll();
  return products;
};

// requisito 01 listar produto pelo id;
const getById = async (id) => {
  const product = await productsModels.getById(id);
  if (!product) {
    return { status: 404, message: 'Product not found' };
  }
  return { status: 200, message: product };
};

module.exports = {
  getAll,
  getById,
};
