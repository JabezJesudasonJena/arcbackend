import express from 'express';


//Routes
import { signUpRoute, loginRoute } from '../controllers/authControl.js';


const router = express.Router();

router.post('/signup', signUpRoute)
router.post('/login', loginRoute)








export default router;