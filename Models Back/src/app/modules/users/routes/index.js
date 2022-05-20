import { Router } from 'express';

import ControllersRender from '../controllers/ControllersRender';
import MiddlewaresAdmin from '../../auth/middlewares/is-auth';

const controllersRender = new ControllersRender();

const router = Router();

router.get('/', MiddlewaresAdmin, controllersRender.getIndex);

export default router;