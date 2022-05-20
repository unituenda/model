import { Router } from 'express';


import ControllersRender from '../controllers/ControllersRender';


const controllersRender = new ControllersRender();

const router = Router();

router.get('/', controllersRender.getIndex);

export default router;