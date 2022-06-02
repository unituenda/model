import { Router } from 'express';
import ControllersRender from '../controllers/ControllersRender';

const router = Router();


const controllersRender = new ControllersRender();


router.get('/welcome', controllersRender.getWelcome);


export default router;