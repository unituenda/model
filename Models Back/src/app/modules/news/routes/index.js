import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../../../../config/multer';
import ControllersRender from '../controllers/ControllersRender';
import ControllerNews from '../controllers/ControllersNews';

const router = Router();
const upload = multer({ storage : multerConfig.storage});
const controllersRender = new ControllersRender();
const controllerNews = new ControllerNews();

router.get('/news', controllersRender.getAddNews);
router.post('/news', upload.single('file'), controllerNews.store);

export default router;