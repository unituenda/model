import Router from 'express';
import ControllersAuth from '../controllers/ControllersAuth';

const controllersAuth = new ControllersAuth();


const router = Router();

router.post('/sessions', controllersAuth.store);