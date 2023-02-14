const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsModels } = require('../../../src/models');
const { connection } = require('../../../src/models/connection');
const { productsMock } = require('./productsMock');

const { expect } = chai;

// requisito 01 listar todos os produtos;
describe('Products Models', function () {
  describe('list all products', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('Should return all products', async function () {

      sinon.stub(connection, 'execute').resolves([productsMock])

      const result = await productsModels.getAll();

      expect(result).to.be.deep.equal(productsMock);
    });
  });
});

// requisito 01 listar produtos por id;
describe('Products Models', function () {
  describe('list product by Id', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('Should return the requisited product', async function () {
      sinon.stub(connection, 'execute').resolves([[productsMock[3]]]);

      const result = await productsModels.getById(4);

      expect(result).to.be.deep.equal(productsMock[3]);
    });
  });
});
