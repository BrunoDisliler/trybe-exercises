const { it, expect } = require('@jest/globals');
const exp = require('constants');
const expectExport = require('expect');
const { describe } = require('yargs');
const sum = require('./sum');

it('Soma entre dois números', () => {
  expect(sum(4, 5)).toEqual(9);
})

it('Soma entre 0 = 0 será 0', () => {
  expect(sum(0, 0)).toEqual(0);
})

it('Retorna erro quando inserir strings com número', () => {
  expect(() => sum(4, '5')).toThrowError();
})

it('Retorna uma string contendo erro específico', () => {
  expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
})
