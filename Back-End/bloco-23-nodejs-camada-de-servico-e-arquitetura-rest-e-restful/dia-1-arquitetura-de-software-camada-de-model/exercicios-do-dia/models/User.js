const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (users) => ({
	id: users.id,
	firstName: users.first_name,
	lastName: users.last_name,
	email: users.email,
  password: users.password,
});

const validations = (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  
  if (!first_name) return res.status(400).json({ message: "'first_name' is required" });
  if (!last_name) return res.status(400).json({ message: "'last_name' is required" });
  if (!email) return res.status(400).json({ message: "'email' is required" });
  if (!password || password < 6) return res.status(400).json({ message: "'password' is required" });
  if (password.length < 6) return res.status(400).json({ message: "'password' length must be at least 6 characters long" });

  next();
};

const getAll = async () => {
  const [ users ] = await connection.execute(
    'SELECT id, first_name, last_name, email, password FROM users'
  );
  return users.map(serialize);
}

const create = async ({ first_name, last_name, email, password }) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)`
    ,[first_name, last_name, email, password]);
  return { id: insertId, first_name, last_name, email, password };
}

const getUserId = async (id) => {
  const [ user ] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM users WHERE id = ?', [id]
  );
  return user.map(serialize); 
}

const updateUser = async (id, { firstName, lastName, email, password }) => {
  const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';
  await connection.execute(query, [firstName, lastName, email, password, id]);
  return getUserId(id);
};

module.exports = { validations, create, getAll, getUserId, updateUser };
