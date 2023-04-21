import express from "express";
import { addPost, submitBusiness } from "../controllers/post.js";

const router = express.Router();

router.get("/", addPost);
router.post("/submitbusinessdetail", submitBusiness);

export default router;
