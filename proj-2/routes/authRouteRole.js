import { signUpRoleRoute } from "../controllers/roleController.js";
import express from 'express';

const roleRouter = express.Router();

roleRouter.post('/signup', signUpRoleRoute);





export default roleRouter;


















