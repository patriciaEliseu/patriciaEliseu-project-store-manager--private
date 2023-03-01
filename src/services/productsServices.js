const Joi = require('joi');
const { productsModels } = require('../models');

const schemaProduct = Joi.object({
  name: Joi.string().min(5).required(),
});

// requisito 01 listar todos os produtos;
const getAll = async () => {
  const products = await productsModels.getAll();
  console.log('prodServices', products);
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
  const { error } = await schemaProduct.validate({ name });
  // console.log('errorService', error);
  if (error) {
    return {
      type: error.details[0].type,
      message: error.message,
    };
  }
  const createProduct = await productsModels.create(name);
  // console.log('createService', createProduct);
  return createProduct;
};

// requisito 10 atualizar produto
const updateProduct = async ({ productId, name }) => {
  // const { error } = await schemaProduct.validate({ name });
  // // console.log('errorService', error);
  // if (error) {
  //   return {
  //     type: error.details[0].type,
  //     message: error.message,
  //   };
  // }
  await productsModels.updateProduct({ productId, name });
  const productAdd = await productsModels.getById(productId);
  if (!productAdd) {
    return { status: 404, message: 'Product not found' };
  }
  return { status: 200, message: { ...productAdd } };
};

// requisito 12 deletar produto
const deleteProduct = async (productId) => {
  const del = await productsModels.getById(productId);
  if (!del) {
    return {
      type: 'NOT_FOUND',
      message: 'Product not found',
    };
  }
  await productsModels.deleteProduct(productId);
  return { type: null, message: null };
};

module.exports = {
  getAll,
  getById,
  create,
  updateProduct,
  deleteProduct,
};
