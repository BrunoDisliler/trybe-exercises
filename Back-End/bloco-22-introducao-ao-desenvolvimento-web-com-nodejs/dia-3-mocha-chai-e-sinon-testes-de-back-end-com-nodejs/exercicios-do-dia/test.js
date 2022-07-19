const sinon = require('sinon');
const { expect } = require('chai');
const calculo = require('./calculo');

describe('Testa se número é positivo', () => {
  it('Retorna "positivo"', () => {
    const funcTest = calculo(5);
    expect(funcTest).to.equal('positivo');
  });
});

describe('Testa se número é negativo', () => {
  it('Retorna "negativo"', () => {
    const funcTest = calculo(-2);
    expect(funcTest).to.equal('negativo');
  });
});

describe('Testa se número é neutro', () => {
  it('Retorna "neutro"', () => {
    const funcTest = calculo(0);
    expect(funcTest).to.equal('neutro');
  });
});