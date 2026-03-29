import {signUp} from "../services/authService.js";


export const signUpRoute = async (req , res) => {
    try {
        const newUser = await signUp(req.body);
        res.status(200).json(newUser)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}