// const joi = require('joi');
const { salesModels /* salesProductsModels */ } = require('../models');
// const { productsModels } = require('../models');

// const schemaSales = joi.object({
//   productId: joi.number().integer().required().label('productId'),
//   quantity: joi.number().min(1).integer()
//     .required()
//     .label('quantity'),
// });

// requisito 08 listar todas as vendas
const getAll = async () => {
  const salesAll = await salesModels.getAll();
  return salesAll;
};

// requisito 08 listar as vendas pelo id
const getById = async (id) => {
  const salesId = await salesModels.getById(id);
  if (salesId.length === 0) {
    return {
      type: 'SALE_NOT_FOUND',
      message: 'Sale not found',
    };
  }
  return {
    type: null,
    message: salesId,
  };
};
// const createSalles = async (sales) => {
//   const arraySchemaSales = joi.array().items(schemaSales);
//   const { error } = await arraySchemaSales.validate(sales);
//    if (error) {
//     return {
//       type: error.details[0].type,
//       message: error.message,
//     };
//    }
//   const newSales = await salesModels.createSalles();
//   const saleProd = sales.map((sale) => ({ ...sale, saleId: newSales }));
//   await Promise.all(saleProd.map(async (element) => {
//     salesProductsModels.create(element);
//   }));
//   const saleObject = { id: newSales, itemsSold: sales };
//   // console.log('saleObject', saleObject);
//   return saleObject;
// };

  module.exports = {
    getAll,
    getById,
  };
