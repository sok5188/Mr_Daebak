var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rhscnd12',
    database : 'SW9',
    port : "3306",
});
db.connect();
module.exports = db;
