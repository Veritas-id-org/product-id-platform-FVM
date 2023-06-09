import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// const dbConfig = {
//     client: "mysql2",
//     connection: {
//         // "db" refers to the name of the service in docker-compose
//         host: "db",
//         // Environment variables are defined in the api service in docker-compose
//         user: "MYSQL_USER",
//         password: "MYSQL_PASSWORD",
//         database: "product",
//         charset: "utf8",
//     },
// };

// export const db = mysql.createConnection(dbConfig.connection);

// export const db = mysql.createConnection({
//     host: "db",
//     // Environment variables are defined in the api service in docker-compose
//     user: "localhost",
//     port: 3306,
//     password: "MYSQL_PASSWORD",
//     database: "product",
//     // authPlugins: {
//     //     mysql_clear_password: () => Buffer.from("MYSQL_PASSWORD"),
//     // },
// });

export const connetToDatabase = () => {
    const db = mysql.createConnection({
        host: "db",
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    });
    db.connect((err) => {
        if (err) {
            console.log("Database Connection Failed!!!", err);
        } else {
            console.log("Connected to Database");
        }
    });
    return db;
};
