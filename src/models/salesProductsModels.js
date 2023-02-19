const { connection } = require('./connection');

const create = async (data) => {
  const sql = 'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity)'
   + 'VALUES(?, ?, ?)';
  const [{ insertId }] = await connection
    .execute(sql, [data.saleId, data.productId, data.quantity]);
  console.log('salesProdModels', insertId);
  console.log('salesProdMod2', sql);
  return insertId;
};

// const delSales = async (saleId) => {
//   connection.execute('DELETE FROM StoreManager.sales_products WHERE sale_id = ?', [saleId]);
// };

module.exports = {
    create,
    // delSales,
};
