const sql = require("mysql");
const dotenv = require("dotenv").config();
const db = sql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})

setInterval(function () {
  db.query('SELECT 1');
}, 5000);

module.exports = db;