import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';

const userRoute = express.Router();

// Only admin can access this route

userRoute.get("/admin", verifyToken,(req, res) => {
    res.json({message : "Welcome Admin !"})
})

//ONly manager can access this route

userRoute.get("/manager", (req, res) => {
    res.json({message: "Welcome Manager"})
})

//All can access this route !

userRoute.get("/user", (req, res) => {
    res.json({message: "Welcom User !"})
})


export default userRoute;