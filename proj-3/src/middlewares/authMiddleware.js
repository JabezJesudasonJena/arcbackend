import jwt from 'jsonwebtoken';


export const verifyToken = async (req, res, next ) => {
    let token;
    let authHeaders;
    const authHeader = req.headers.Authorization || req.headers.authorization ;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        if(!token){return res.status(401).json({message: "No token recieved"})}
        try{
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode.role;
            next();
        }catch(err){
            res.status(400).json({message: "Token is not valid !"})
        }
    }
}





