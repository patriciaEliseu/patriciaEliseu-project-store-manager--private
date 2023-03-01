const { connection } = require('./connection');

// requisito 01
const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const products = await connection.execute(query);
  console.log('prodModels', products);
  return products;
};

// requisito 01 listar products pelo id;
const getById = async (id) => {
  const query = 'SELECT * FROM  StoreManager.products WHERE id = ?';
  const [[productId]] = await connection.execute(query, [id]);
  return productId;
};

// requisito 03 cadastrar produtos
const create = async (name) => {
  const query = 'INSERT INTO StoreManager.products(name) VALUES(?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  const object = { id: insertId, name };
  return object;
};

// requisito 10 atualizar produto
const updateProduct = async ({ productId, name }) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, productId]);
  return { id: productId, ...name };
};

module.exports = {
    getAll,
    getById,
    create,
    updateProduct,
};
