import mysql from 'mysql2';


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "testdb"
});

db.connect((err) => {
    if (err) {
        console.error("error connecting: ", err);
    } else {
        console.log("connected to database");
    }
});

export default db;