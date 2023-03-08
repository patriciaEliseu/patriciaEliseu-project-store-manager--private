const express = require('express');
const { productsControllers, salesControllers } = require('./controllers');
const validateNameProduct = require('./middlewares/validateNameProduct');
const validateProductId = require('./middlewares/validateProductId');
const router = require('./router');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(router);

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

// requisito 10 endpoint atualizar produto
app.put('/products/:id', validateProductId,
  validateNameProduct, productsControllers.updateProduct);

// requisito 12 endpoint para deletar produto
app.delete('/products/:id', productsControllers.deleteProduct);

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
