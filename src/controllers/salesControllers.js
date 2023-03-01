const { salesServices } = require('../services');

// requisito 08 listar todas as vendas
const getAll = async (_req, res) => {
  const salesAll = await salesServices.getAll();
  // console.log('saleAllC', salesAll);
  return res.status(200).json(salesAll);
};

// requisito 08 listar venda por id
const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesServices.getById(id);
  if (type) {
    return res.status(404).json({ message });
    }
  return res.status(200).json(message);
};

// requisito 06 criar endpoint para cadastrar vendas e validar
// const createSalles = async (req, res) => {
//   const data = [...req.body];
//   const { type, message } = await salesServices.createSalles(data);
//   console.log('typemessage', type, message);
//   if (type === 'any.required') {
//     return res.status(400).json(message);
//   }
//   if (type === 'number.min') {
//     return res.status(422).json(message);
//   }
//   if (type === 'null') {
//     res.status(201).json(message);
//   }
// };

module.exports = {
  getAll,
  getById,
  // createSalles,
};
