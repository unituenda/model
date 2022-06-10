import { Router } from 'express';
import multer from 'multer';

import ControllersRender from '../controllers/ControllersRender';
import ControllersUser from '../controllers/ControllersUser';
import SessionAuth from '../../../middleware/is-auth';
import multerConfig from '../../../../config/multer';

const upload = multer({ storage : multerConfig.storage});
const controllersRender = new ControllersRender();
const controllersUser = new ControllersUser();
const router = Router();

router.use(SessionAuth);
router.get('/', controllersRender.getIndex);
router.get('/user', controllersRender.getUser);
router.post('/avatar', upload.single('file'), controllersUser.updateAvatar);

export default router;