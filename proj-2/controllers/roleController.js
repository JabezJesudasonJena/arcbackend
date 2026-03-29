import { signUpRole } from "../services/roleService.js";

export const signUpRoleRoute = async (req ,res) => {
    try {
        const user = await signUpRole(req.body);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({signedUp : 0, message : err.message});
    }
}