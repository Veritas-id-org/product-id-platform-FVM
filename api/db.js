import mysql from "mysql2";
import * as dotenv from "dotenv";

dotenv.config();

const dbConfig = {
    client: "mysql2",
    connection: {
        // "db" refers to the name of the service in docker-compose
        host: "db",
        // Environment variables are defined in the api service in docker-compose
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        charset: "utf8",
    },
};

export const db = mysql.createConnection(dbConfig.connection);

// export const db = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//     authPlugins: {
//         mysql_clear_password: () => Buffer.from(process.env.MYSQL_PASSWORD),
//     },
// });
