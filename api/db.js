import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "product",
    authPlugins: {
        mysql_clear_password: () => Buffer.from("yourpassword"),
    },
});
