import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register)
<<<<<<< HEAD
router.post('/login', login)
=======
router.post('/login',  login)

>>>>>>> 781621208732c704270b3e6f68967c8c5ca948c6

export default router;