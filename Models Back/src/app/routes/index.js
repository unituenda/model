import User from '../modules/users/routes'
import { Router } from 'express';

const router = Router();

router.use(User);

export default router;