import { Router } from "express";
import { user } from '../controllers/userInfoController';

const router = Router();

router.post('/user', user);

export default router;