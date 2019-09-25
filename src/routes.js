import { Router } from 'express';
import UserController from './app/controllers/UserController';
import CardController from './app/controllers/CardController';
import TransactionController from './app/controllers/TransactionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/cards', CardController.store);
routes.post('/transactions', TransactionController.store);

export default routes;
