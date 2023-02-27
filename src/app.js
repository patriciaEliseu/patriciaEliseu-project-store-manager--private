const express = require('express');
const { productsControllers, /* , salesControllers  */
salesControllers } = require('./controllers');
// const validateProductId = require('./middlewares/validateProductId');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// requisito 01 endpoint /products;
app.get('/products', productsControllers.getAll);

// requisito 08 endpoint /sales, para listar todas as vendas.
app.get('/sales', salesControllers.getAll);

// requisito 01 endpoint /products/:id;
app.get('/products/:id', productsControllers.getById);

// requisito 08 endpoint /sales/:id;
app.get('/sales/:id', salesControllers.getById);

// requisito 03 endpoint cadastrar /products;
app.post('/products', productsControllers.create);

// requisito 06 endpoint cadastrar /sales;
// app.post('/sales', validateProductId, salesControllers.createSalles);

// requisito 04 middleware de erro genérico;
// app.use((error, req, res, _next) => {
// console.log('miderror', error);
//   if (error.status) {
//     return res.status(error.status).json({ message: error.message });
//   }
// });
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
