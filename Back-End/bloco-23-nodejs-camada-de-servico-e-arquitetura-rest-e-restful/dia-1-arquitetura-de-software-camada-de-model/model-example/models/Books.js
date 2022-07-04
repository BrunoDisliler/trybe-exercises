const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getAuhorById = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';
  const [books] = await connection.execute(query, [authorId]);
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

module.exports = {
  getAll,
  getAuhorById,
};

// Crie um método getByAuthorId no modelo Book, 
// para retornar apenas livros associados com um determinado author_id. 
// Altere o middleware da rota books criado no passo 2 
// para receber uma query string com a chave author_id, e retornar apenas os livros associados.