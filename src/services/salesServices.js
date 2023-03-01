// const joi = require('joi');
const { salesModels/* , salesProductsModels */ } = require('../models');
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

// requisito 06 criar venda se passar pelo joi.
// const createSalles = async (sales) => {
//   const arraySchemaSales = joi.array().items(schemaSales);
//   const { error } = await arraySchemaSales.validate(sales);
//   console.log('error', error, sales);
//    if (error) {
//     return {
//       type: error.details[0].type,
//       message: error.message,
//     };
//    }
//   // newSales resposta o id do sales
//   const newSales = await salesModels.createSalles(sales);
//   console.log('newSales', newSales);
//   // saleProd pega o array de objetos faz um find para percorrer cada um
//   //  e acrescentar o id de venda
//   const saleProd = sales.map((sale) => ({ ...sale, saleId: newSales }));
//   // fez um promise.all para pegar essa venda com id e inserir na salesProdMod
//   await Promise.all(saleProd.map(async (element) => {
//     console.log('sss', salesProductsModels.create(element));
//   }));

//   const saleObject = { id: newSales, itemsSold: sales };
//   console.log('saleObject', saleObject);
//   return saleObject;
// };

  module.exports = {
    getAll,
    getById,
    // createSalles,
  };
