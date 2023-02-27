const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsMock } = require('./productsMock');
const { productsServices } = require('../../../src/services');
const { productsControllers } = require('../../../src/controllers');
const { restart } = require('nodemon');


chai.use(sinonChai);
const { expect } = chai;

describe('Controllers Products', function () {
  describe('List all Products', function () {
    const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(() => {
      sinon.restore();
    });

    it('Should return a response with status 200 and all orders', async function () {
      sinon.stub(productsServices, 'getAll').resolves([productsMock]);
      await productsControllers.getAll(req, res);


      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsMock);
    });
  });
});

describe('Controllers Products', function () {
  describe('List Product by Id', function () {
    const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(() => {
      sinon.restore();
    });

    it('Should return a response with status 200 and list product by Id', async function () {
      req.params = { id: 1 };
console.log('judas2', productsMock[0]);
      sinon.stub(productsServices, 'getById').resolves({ status: 200, message: { ...productsMock[0]} });
      await productsControllers.getById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsMock[0]);
    });
  });
});

// requisito 07 de testes
describe('Controller Products', function () {
  describe('created Product ', function () {
    const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(() => {
      sinon.restore();
    });

    it('Should return the new created product', async function () {
      req.body = {
        name: 'ProdutoXX',
      }

      const newProduct = { id: 4, ...req.body }

      sinon.stub(productsServices, 'create').resolves(newProduct);
      await productsControllers.create(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWithExactly(newProduct);
    });
  });
});
