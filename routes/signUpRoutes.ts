import { Router } from "express";
import { userSignUp } from '../controllers/authenticationController';

const router: Router = Router();

router.post('/signup', userSignUp);

export default router;