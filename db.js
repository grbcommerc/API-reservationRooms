const mysql = require('mysql2/promise');

console.log("passou no DB")

const pool = mysql.createPool({
  host: 'containers-us-west-78.railway.app',
  user: 'root',
  password: 'rkEb4cSTgWogmgXGnenL',
  database: 'railway',
  port: '7145',
  waitForConnections: true,
});

module.exports = pool;