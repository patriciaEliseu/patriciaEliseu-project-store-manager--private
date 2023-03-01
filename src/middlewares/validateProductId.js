// const productsServices = require('../services/productsServices');

// module.exports = async (req, res, next) => {
//   const products = req.body;
//   const result = await Promise.all(
//     products.map((product) => productsServices.getById(product.productId)),
// );
//   console.log('result', result);
//   if (result.some((element) => element.status === 404)) {
//     return res.status(404).json({ message: 'Product not found' });
//   }
//   return next();
// };

const { productsServices } = require('../services');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const product = await productsServices.getById(id);
  if (product.type === 'NOT_FOUND') {
    return res.status(404).json({ message: product.message });
  }

  return next();
};
