import { Router } from 'express';

import ControllersRender from '../controllers/ControllersRender';

const router = Router();

const controllersRender = new ControllersRender();

router.get('/f', controllersRender.getListMods);
router.get('/add', controllersRender.getAddMods)

export default router;