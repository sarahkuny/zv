require("dotenv").config();
const mysql = require("pg");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = pg.createConnection({
  host: DB_HOST ,
  user: DB_USER ,
  password: DB_PASS,
  database: DB_NAME,
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  //create users table
  let sqlUsers =
    "DROP TABLE if exists users; CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT, first_name VARCHAR(255) not null, last_name VARCHAR(255), username VARCHAR(40) not null, password VARCHAR(255) not null, PRIMARY KEY (id));";
  con.query(sqlUsers, function (err, result) {
    if (err) throw err;
    console.log("Table creation `users` was successful!");
  });

  con.end();
});
