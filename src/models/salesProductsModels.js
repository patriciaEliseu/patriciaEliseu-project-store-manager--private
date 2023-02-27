// const { connection } = require('./connection');

// const create = async (data) => {
//    let sql = 'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)';
//   sql += ' VALUES(?, ?, ?)';
//   const [{ insertId }] = await connection
//     .execute(sql, [data.saleId, data.productId, data.quantity]);

//   return insertId;
// };

// // const del = async (saleId) =>
// //   connection
// //     .execute('DELETE FROM StoreManager.sales_products WHERE sale_id = ?', [saleId]);
// // // console.log('Models', result);

// module.exports = {
//   create,
//   // del,
// };
