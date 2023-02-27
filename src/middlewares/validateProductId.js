const { productsServices } = require('../services');

module.exports = (req, res, next) => {
  const { id } = req.params;

  const { type, message } = productsServices.getById(id);
  if (type) {
    return res.status(404).json(message);
  }

  return next();
};
