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
  return res.status(200).json(product.message);
};

// requisito 03 cadastrar produto;
const create = async (req, res) => {
  const { name } = req.body;
  // console.log('body', req.body);
  const createProduct = await productsServices.create(name);
  // console.log('judas', createProduct);
  if (createProduct.type === 'any.required') {
    return res.status(400).json({ message: createProduct.message });
  }
  if (createProduct.type === 'string.min') {
    return res.status(422).json({ message: createProduct.message });
  }
    return res.status(201).json(createProduct);
};

module.exports = {
  getAll,
  getById,
  create,
};
