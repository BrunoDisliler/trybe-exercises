const sum = require('./sum');

test('Soma entre dois números', () => {
  expect(sum(4, 5)).toEqual(9);
})