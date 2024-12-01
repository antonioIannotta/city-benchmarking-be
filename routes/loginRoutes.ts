import { Router } from "express";
import { userLogin } from '../controllers/authenticationController';

const router: Router = Router();

router.post('/login', userLogin);

export default router;