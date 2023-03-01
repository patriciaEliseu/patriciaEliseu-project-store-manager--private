const { connection } = require('./connection');

// requisito 08 criar endpoints para listar todas as vendas
const getAll = async () => {
  const [date] = await connection.execute(
    'SELECT d.id AS saleId, d.date, p.product_id AS productId, p.quantity FROM'
    + ' StoreManager.sales_products AS p LEFT JOIN StoreManager.sales as d ON d.id = p.sale_id',
  );
  return date;
};

// requisito 08 listar vendas pelo id
const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT d.date, p.product_id AS productId, p.quantity FROM'
    + ' StoreManager.sales_products AS p LEFT JOIN StoreManager.sales as d ON d.id = p.sale_id'
    + ` WHERE d.id = ${id} ORDER BY d.id, p.product_id ASC`,
  );
  return result;
};

// const createSalles = async () => {
//   // NOW() poderia usar essa função para criar uma data dentro do values
//   const query = 'INSERT INTO StoreManager.sales (date) VALUES(?)';
//   const createDate = new Date();
//   const [{ insertId }] = await connection.execute(query, [createDate]);
//   console.log('insertId', insertId);
//   return insertId;
// };

module.exports = {
  getAll,
  getById,
  // createSalles,
};
