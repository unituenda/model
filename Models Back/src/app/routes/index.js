import Auth from '../modules/auth/routes';
import admin from '../modules/users/routes';

import { Router } from 'express';

const router = Router();

router.use(Auth);
router.use('/admin', admin);
export default router;