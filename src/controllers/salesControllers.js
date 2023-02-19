const { salesServices } = require('../services');

// requisito 06 criar endpoint para cadastrar vendas e validar
const createSalles = async (req, res) => {
  const data = [...req.body];
    console.log('dataController', data);
    const salesProducts = await salesServices.createSalles(data);
    console.log('salesProdContr', salesProducts);
    if (salesProducts.type === 'any.required') {
      return res.status(400).json({ message: salesProducts.message });
    }
    if (salesProducts.type === 'number.min') {
      return res.status(422).json({ message: salesProducts.message });
    }
    if (salesProducts.details === 'NOT_FOUND') {
      return res.status(404).json({ message: salesProducts.message });
    }
    res.status(201).json(salesProducts);
};

module.exports = {
  createSalles,
};
