const { Book } = require('../database/models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const bookById = await Book.findByPk(id);
  return bookById;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [updated] = await Book.update(
    { 
      title, 
      author, 
      pageQuantity 
    },
    { where: { id } })
    
    return updated;
  };

const remove = async (id) => {
  const removeBook = await Book.destroy({
    where: { id }
  });
  return removeBook;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};