// const { productService } = require('../services');

module.exports = async (req, res, next) => {
  const { name } = req.body;

  // const productName = await productService.registerProduct(name);
  if (!name) {
    return res.status(400).json({
      message: '"name" is required',
    });
  }
  if (name.length < 5) {
    return res.status(422).json({
      message: '"name" length must be at least 5 characters long',
    });
  }
  return next();
};
