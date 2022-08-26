// MySql Connection String
const mysql = require('mysql');
let connection;

if (process.env.DB_SOURCE == "LOCAL") {
    console.log("LOCAL DB");
    //local mysql db connection
     connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
}

if (process.env.DB_SOURCE == "SERVER") {
    console.log("SERVER DB");
    //Server mysql db connection
     connection = mysql.createConnection({
        host: process.env.SERVER_DB_HOST,
        user: process.env.SERVER_DB_USERNAME,
        password: process.env.SERVER_DB_PASSWORD,
        database: process.env.SERVER_DB_NAME
    });
}


connection.connect(function (err) {
    // if (err) throw err;
    if (err) {
        console.log('error: ', err);
    } else {
        console.log('MYSQL connection Established !');
    }
});

module.exports = connection;