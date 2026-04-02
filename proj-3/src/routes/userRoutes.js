import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";

const userRoute = express.Router();

userRoute.get('/admin',verifyToken, (req, res) => {
    res.json({message: "Welcome Admin !"})
})

userRoute.get('/manager', (req, res) => {
    res.json({message: "Welcome Manager !"})
})

userRoute.get('/user', (req, res) => {
    res.json({message: "Welcome User !"})
})

export default userRoute;