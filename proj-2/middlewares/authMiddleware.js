import jwt from 'jsonwebtoken';

export const authMiddleware = async (req , res , next) => {
    try { 
        const token = await req.headers.authorization;
        if(!token ) return res.staus(401).json({message: "No jwt token present !"});
        
        const decoedToken = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoedToken;
        next(); 
    } catch (err) {
        res.staus(401).json({message : err.message})
    } 
}





