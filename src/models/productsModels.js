const { connection } = require('./connection');

// requisito 01
const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(query);
  return products;
};

module.exports = {
  getAll,
};
