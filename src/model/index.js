const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b821b679a447a0",
    password: "17a708ed",
    database: "heroku_3a73eeeb09f5b0d",
});

module.exports = connection;
