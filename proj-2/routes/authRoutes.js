import express from 'express';


//Routes
import { signUpRoute } from '../controllers/authControl.js';


const router = express.Router();

router.post('/signup', signUpRoute)








export default router;