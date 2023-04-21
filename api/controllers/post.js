import { db } from "../db.js";

export const addPost = (req, res) => {
    res.json("from controller");
};

export const submitBusiness = (req, res) => {
    console.log(req.body);
    const q = "UPDATE users SET `business_name`=?, `address`=?, `website`=? WHERE `username` = ?";
    const values = [req.body.business_name, req.body.address, req.body.website, req.body.id];
    db.query(q, [...values, values[3]], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.status(200).json("Business Detail has been registered!");
    });
};
