var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "Admin12345",
    database:  "Phone"
  });

connection.connect();

module.exports = connection;