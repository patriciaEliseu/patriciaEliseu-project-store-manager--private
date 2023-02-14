const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsModels } = require('../../../src/models');
// const { connection } = require('../models/connection');
const { productsMock } = require('./productsMock');
const { productsServices } = require('../../../src/services');

chai.use(sinonChai);
const { expect } = chai;

describe('Products Services', function () {
  describe('list all products', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('Should return all products', async function () {
      sinon.stub(productsModels, 'getAll').resolves(productsMock);

      const result = await productsServices.getAll();

      expect(result).to.be.deep.equal(productsMock);
    });
  });
});

describe('Products Services', function () {
  describe('list product by Id', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return "message:NOT_FOUND" if the product exists', async function () {
      const productId = 10;
      const message = {
        status: 404,
        message: 'Product not found',
      };

      sinon.stub(productsModels, 'getById').resolves(undefined);
      const result = await productsServices.getById(productId);
      expect(result).to.be.deep.equal(message);
    });
    it('Should return product requisited', async function () {
      const productId2 = { id: 1, name: 'Martelo de Thor' };
      sinon.stub(productsModels, 'getById').resolves(productsMock[0]);

      const result = await productsServices.getById(productId2);
// console.log('judas', result);
      expect(result.message).to.be.deep.equal(productId2);
    });
  });
});
