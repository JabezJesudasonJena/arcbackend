import {signUp} from "../controllers/authControl.js";


export const signUpRoute = async(req, res) => {
    try {
        const result = await signUp(req.body);
        res.json(result); 
    } catch(err) {
        res.status(500).json({error : err.message, userCreated : 0});
    }
}



