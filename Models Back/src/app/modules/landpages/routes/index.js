import { Router } from 'express';
import ControllersRender from '../controllers/ControllersRender';

const router = Router();


const controllersRender = new ControllersRender();


router.get('/welcome', controllersRender.getWelcome);
router.get('/', controllersRender.getIndex);
router.get('/about', controllersRender.getAbout);

export default router;