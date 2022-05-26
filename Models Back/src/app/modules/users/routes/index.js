import { Router } from 'express';

import ControllersRender from '../controllers/ControllersRender';
import SessionAuth from '../../../middleware/is-auth';

const controllersRender = new ControllersRender();

const router = Router();

router.use(SessionAuth);
router.get('/', controllersRender.getIndex);

export default router;