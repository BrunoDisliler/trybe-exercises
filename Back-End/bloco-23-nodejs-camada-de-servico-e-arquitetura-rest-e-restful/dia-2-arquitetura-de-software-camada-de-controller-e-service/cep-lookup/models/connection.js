const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.localhost,
  user: process.env.root,
  password: process.env.Disliler21,
  database: process.env.cep_lookup,
})

module.exports = connection;
