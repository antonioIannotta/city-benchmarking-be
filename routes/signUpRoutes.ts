import { Router } from "express";
import { userSignUp } from '../controllers/authenticationController';

const router = Router();

router.post('/signup', userSignUp);

export default router;