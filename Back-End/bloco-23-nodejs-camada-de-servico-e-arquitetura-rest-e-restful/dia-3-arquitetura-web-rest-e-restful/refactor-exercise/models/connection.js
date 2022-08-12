const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Disliler21',
  database: 'rest_exercicios'
});

module.exports = connection;
