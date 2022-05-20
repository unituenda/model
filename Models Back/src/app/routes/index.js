import Auth from '../modules/auth/routes';
import { Router } from 'express';

const router = Router();

router.use(Auth);

export default router;