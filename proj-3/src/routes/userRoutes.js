import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const userRoute = express.Router();

userRoute.get('/admin',verifyToken, authorizeRoles("admin"),(req, res) => {
    res.json({message: "Welcome Admin !"})
})

userRoute.get('/manager', verifyToken, authorizeRoles("manager"), (req, res) => {
    res.json({message: "Welcome Manager !"})
})

userRoute.get('/user', (req, res) => {
    res.json({message: "Welcome User !"})
})

export default userRoute;