import { registerService, loginService } from "../services/authService.js"


export const register = async (req , res) => {
    try{
        const user = await registerService(req.body);
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

export const login = async (req , res) => {
    try {
        const user = await loginService(req.body);
        res.status(200).json(user);
    } catch (err) { 
        res.status(500).json({message: err.message});
    }
}





