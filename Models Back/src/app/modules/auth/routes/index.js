import { Router } from 'express';

import ControllersAuth from '../controllers/ControllersAuth';
import ControllersAuthRender from '../controllers/ControllersAuthRender';

const controllersAuth = new ControllersAuth();
const controllersAuthRender = new ControllersAuthRender();

const router = Router();

router.get('/signup', controllersAuthRender.getAdminSignup);
router.post('/signup', controllersAuth.store);

router.get('/signin', controllersAuthRender.getAdminSignin);
router.post('/signin', controllersAuth.index);

router.get('/logout', controllersAuth.delete);
export default router;