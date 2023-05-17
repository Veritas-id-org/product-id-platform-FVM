import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connetToDatabase } from "./db.js";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.json("Testing Node.js Server");
});

app.listen(PORT, () => {
    console.log("Server Connected!");
});

const db = connetToDatabase();
// console.log("Creating database");
// let databaseName = "product";
//Query to create database
// let databaseQuery = `CREATE DATABASE ${databaseName} `;
// db.query(databaseQuery, (err, rows) => {
//     if (err) {
//         console.log("Database exits");
//     } else {
//         console.log(`Successfully created database - ${databaseName}`);
//     }
// });
// const useDBSql = "USE product";
// db.query(useDBSql, (err, rows) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(`Database ${databaseName} is selected`);

//     }
// });
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
