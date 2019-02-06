const mysql = require('mysql');
const config = require('../../config/');

const connection = mysql.createConnection({
    host: config.dbConfig.getHost(),
    user: config.dbConfig.getUser(),
    password: config.dbConfig.getPassword(),
    database: config.dbConfig.getDatabase(),
});

connection.connect();

module.exports = connection;
