import Auth from '../modules/auth/routes';
import admin from '../modules/users/routes';
import News from '../modules/news/routes';
import Models from '../modules/modelos/routes';
import LandPages from '../modules/landpages/routes';

import { Router } from 'express';

const router = Router();

router.use(Auth);

router.use('/', LandPages);
router.use('/admin', admin);
router.use('/admin/news', News);
router.use('/admin/models', Models);

export default router;