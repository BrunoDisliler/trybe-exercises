const { books } = require('../database/models');

const getAll = async() => {
  const books = await books.findAll()
  return books;
};

module.exports = {
  getAll,
};