import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import { db } from "./db.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed!!!", err);
    } else {
        console.log("Connected to Database");
        console.log("Creating database table");
        let tableName = "users";
        let tableName2 = "manage_account";

        // Query to create table
        let query = `CREATE TABLE ${tableName} 
        (id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, business_name VARCHAR(255), address VARCHAR(255), website VARCHAR(255), brand_name VARCHAR(255), category VARCHAR(255) 
        )`;
        // let query = `CREATE TABLE ${tableName}
        // (id INT AUTO_INCREMENT PRIMARY KEY,
        // username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, INDEX username_index(username)
        // )`;

        // let query2 = `CREATE TABLE ${tableName2}
        // (id INT AUTO_INCREMENT PRIMARY KEY,
        // name VARCHAR(255) NOT NULL, username VARCHAR(255), address VARCHAR(255) NOT NULL, website VARCHAR(255), CONSTRAINT FK_User_Username FOREIGN KEY(username) REFERENCES users(username)
        // )`;

        db.query(query, (err, rows) => {
            if (err) {
                console.log("Table Exist");
            } else {
                console.log(`Successfully Created Table - ${tableName}`);
            }
        });

        // db.query(query2, (err, rows) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(`Successfully Created Table - ${tableName2}`);
        //     }
        // });
    }
});

app.listen(8800, () => {
    console.log("Server Connected!");
});
