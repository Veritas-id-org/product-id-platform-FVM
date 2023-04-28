import mysql from "mysql2";
import * as dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    // database: "product",
    authPlugins: {
        mysql_clear_password: () => Buffer.from(process.env.DB_PASSWORD),
    },
});
