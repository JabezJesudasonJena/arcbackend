import {signUp, login} from "../services/authService.js";


export const signUpRoute = async (req , res) => {
    try {
        const newUser = await signUp(req.body);
        res.status(200).json(newUser)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}

export const loginRoute = async (req , res) => {
    try {
        const loggedInUser = await login(req.body);
        res.status(200).json(loggedInUser)
    }catch(err) {
        res.status(500).json({message : err.message})
    }
}


