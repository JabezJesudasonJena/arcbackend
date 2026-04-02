export const authorizeRoles = (...allowdRoles) => {
    return (req, res, next) => {
        if(!allowdRoles.includes(req.user.role)){
            return res.status(403).json({message : "Access denied !"})
        }
        next();
    }
}