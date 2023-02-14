// const Joi = require('joi');
const { productsModels } = require('../models');

// const productSchema = Joi.object({
//   name: Joi.string().min(2).max(30).required(),
// });

// requisito 01
const getAll = async () => {
  const products = await productsModels.getAll();
  return products;
};

module.exports = {
  getAll,
};
