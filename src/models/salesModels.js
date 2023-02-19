const { connection } = require('./connection');

const createSalles = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES(?)';
  const createDate = new Date();
  const [{ insertId }] = await connection.execute(query, [createDate]);
  return insertId;
};

module.exports = {
  createSalles,
};
