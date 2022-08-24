const chai = require("chai");
const chaiHttp = require('chai-http');
const { response } = require("express");
const { getJsonFile } = require('../../src/app');

getJsonFile('chocolates.json');

const { app } = require("../../src/app");

const { expect } = chai;

chai.use(chaiHttp)

describe('Testa a API de chocolates', function () {
  it('verifica o total de chocolates na API', async function () {
    const { body: { chocolates } } = await chai.request(app).get('/chocolates/total');
    const totalChocolates = (chocolates.chocolates).length;
    expect(totalChocolates).to.be.equals(4);
  });

  it('verifica se "/chocolates/search?name=Mint" retorna os valores esperados', async function () {
    const { body: { chocolates } } = (
      await chai
        .request(app)
        .get('/chocolates/search')
        .query({ name: 'Mint' }));
    expect((chocolates[ 0 ].name).toLowerCase()).to.include('mint');
    expect((chocolates[ 1 ].name).toLowerCase()).to.include('mint');
  });

  it('verifica se "/chocolates/search?name=ZZZ" retorna um array vazio', async function () {
    const { body: { chocolates } } = (
      await chai
        .request(app)
        .get('/chocolates/search')
        .query({ name: 'ZZZ' }));
    expect(chocolates.length).equals(0);
  });
});