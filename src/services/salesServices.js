const joi = require('joi');
const { salesModels, salesProductsModels } = require('../models');

const schemaSales = joi.object({

  productId: joi.number().integer().required().label('productId'),
  quantity: joi.number().min(1).max(10).integer()
    .required()
.label('quantity'),
// }).message({
//   'any.required': '{{#label}} is required',
//   'quantity.min': '{{#label}} is required',
});
// console.log('shemaS', schemaSales);

const createSalles = async (sales) => {
  // console.log('salesServ', sales);
  const salesProducts = await salesModels.createSalles();
  console.log('salesProdServ', salesProducts);
  const saleProd = sales.map((sale) => ({ ...sale, saleId: salesProducts }));
  await Promise.all(saleProd.map(async (element) => {
    salesProductsModels.create(element);
  }));
  const arraySchemaSales = joi.array().items(schemaSales);
  const { error } = await arraySchemaSales.validate(sales);
  console.log('errorServ', error);
  if (error) {
    return {
      type: error.details[0].type,
      message: error.message,
    };
  }

  const saleObject = { id: salesProducts, itemsSold: sales };
  console.log('saleObject', saleObject);
  return saleObject;
};

module.exports = {
  createSalles,
};
