import { Router } from "express";
import { userInsert, userUpdate } from '../controllers/userInfoController';

const router: Router = Router();

router.post('/user', userInsert);
router.put('/user', userUpdate);

export default router;