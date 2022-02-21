import { Router } from 'express';

import ControllerPublic from '../controllers/ControllerPublic';

const router = Router();

router.get(('/', ControllerPublic.getIndex));

export default router;