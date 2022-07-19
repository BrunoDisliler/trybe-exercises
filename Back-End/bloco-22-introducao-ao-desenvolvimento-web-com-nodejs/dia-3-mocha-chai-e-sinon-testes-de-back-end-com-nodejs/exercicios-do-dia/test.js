const sinon = require('sinon');
const { expect } = require('chai');
const calculo = require('./calculo');

describe('Testa se número é positivo', () => {
  it('Retorna string "positivo"', () => {
    const funcTest = calculo(5);
    expect(funcTest).to.equal('positivo');
  });
});

describe('Testa se número é negativo', () => {
  it('Retorna string "negativo"', () => {
    const funcTest = calculo(-2);
    expect(funcTest).to.equal('negativo');
  });
});

describe('Testa se número é neutro', () => {
  it('Retorna string "neutro"', () => {
    const funcTest = calculo(0);
    expect(funcTest).to.equal('neutro');
  });
});

describe('Testa se número não é do tipo Number', () => {
  it('Retorna a string "O valor deve ser um número"', () => {
    const funcTest = calculo('a');
    expect(funcTest).to.equal('O valor deve ser um número');
    });
});
