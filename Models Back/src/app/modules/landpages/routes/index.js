import { Router } from 'express';
import ControllersRender from '../controllers/ControllersRender';

const router = Router();


const controllersRender = new ControllersRender();


router.get('/welcome', controllersRender.getWelcome);
router.get('/', controllersRender.getIndex);
router.get('/about', controllersRender.getAbout);
router.get('/service', controllersRender.getService);
router.get('/female', controllersRender.getFemale);
router.get('/male', controllersRender.getMale);
router.get('/inscription', controllersRender.getInscription);;
router.get('/any', controllersRender.getAny);
router.get('/solidary', controllersRender.getSolidary);
router.get('/mister', controllersRender.getMister);
router.get('/casting', controllersRender.getCasting);
router.get('/blog', controllersRender.getBlog);
router.get('/contact', controllersRender.getContact);
export default router;