import { Router } from 'express';
import UserController from './app/controllers/UserController';
import CardController from './app/controllers/CardController';
import TransactionController from './app/controllers/TransactionController';
import FinancialController from './app/controllers/FinancialController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/cards', CardController.store);
routes.post('/transactions', TransactionController.store);
routes.get('/transactions', TransactionController.index);
routes.get('/financials', FinancialController.index);

export default routes;
