const { productsServices } = require('../services');

// requisito 01 listar todos os produtos;
const getAll = async (_req, res) => {
  const [products] = await productsServices.getAll();
  console.log('prodControllers', products);
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

// requisito 10 atualizar produto
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const newUpdate = await productsServices.updateProduct({ productId: id, name });
  if (newUpdate.status === 404) return res.status(404).json({ message: newUpdate.message });
  res.status(200).json(newUpdate.message);
};

// requisito 12 deletar produto
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.deleteProduct(id);
  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(204).json();
};

module.exports = {
  getAll,
  getById,
  create,
  updateProduct,
  deleteProduct,
};
