import { Router } from 'express';
import UserController from './app/controllers/UserController';
import CardController from './app/controllers/CardController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/cards', CardController.store);

export default routes;
