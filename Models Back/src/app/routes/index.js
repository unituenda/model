import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
    response.render('dashboard/cadastrar');
});

export default router;