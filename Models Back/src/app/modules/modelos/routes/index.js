import { Router } from 'express';
import multer from 'multer';

import ControllersRender from '../controllers/ControllersRender';
import ControllersModels from '../controllers/ControllersModels';
import multerConfig from '../../../../config/multer';

const router = Router();

const upload = multer({ storage : multerConfig.storage});
const controllersRender = new ControllersRender();
const controllersModels = new ControllersModels();

router.get('/f', controllersRender.getListMods);
router.get('/m', controllersRender.getListMMods);
router.get('/add', controllersRender.getAddMods)

router.post('/add', upload.array('file', 12), controllersModels.store);

export default router;