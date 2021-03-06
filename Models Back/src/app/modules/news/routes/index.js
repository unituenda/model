import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../../../../config/multer';
import ControllersRender from '../controllers/ControllersRender';
import ControllerNews from '../controllers/ControllersNews';
import SessionAuth from '../../../middleware/is-auth';

const router = Router();
const upload = multer({ storage : multerConfig.storage});
const controllersRender = new ControllersRender();
const controllerNews = new ControllerNews();

router.use(SessionAuth);
router.get('/add', controllersRender.getAddNews);
router.post('/add', upload.single('file'), controllerNews.store);

router.get('/list', controllersRender.getListNews);
router.get('/edit/:id', controllersRender.getEdit);
router.get('/delete/:id', controllerNews.delete);

router.post('/update', controllerNews.update);
export default router;