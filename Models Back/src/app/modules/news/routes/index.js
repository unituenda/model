import { Router } from 'express';

import ControllersRender from '../controllers/ControllersRender';

const router = Router();
const controllersRender = new ControllersRender();

router.get('/news', controllersRender.getAddNews);

export default router;