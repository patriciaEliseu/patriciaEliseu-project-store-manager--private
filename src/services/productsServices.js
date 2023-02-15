// const Joi = require('joi');
const { productsModels } = require('../models');

// const productSchema = Joi.object({
//   name: Joi.string().min(5).max(30).required(),
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
  return { status: 200, message: { ...product } };
};

// requisito 03 cadastrar produto;
const create = async (name) => {
  // const { error } = productSchema.validate({ name });
  // if (error) throw { status}
  const createProduct = await productsModels.create(name);
  return createProduct;
};

module.exports = {
  getAll,
  getById,
  create,
};
