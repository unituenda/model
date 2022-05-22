import Auth from '../modules/auth/routes';
import admin from '../modules/users/routes';
import News from '../modules/news/routes';

import { Router } from 'express';

const router = Router();

router.use(Auth);
router.use('/admin', admin);
router.use('/admin', News);

export default router;