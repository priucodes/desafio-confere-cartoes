import { addDays } from 'date-fns';
import Transaction from '../models/Transaction';

/**
 * TODO:
 * - [] Validate the transactions
 * - [] The user can only create a transaction if he has a card associated
 * - [] List all of the transactions
 * - [x] if type="debit" - status="received" - received_date (created_at + 0)
 * - [x] if type="credit" - installment=null - status="expected" - received_date(created_at + 30)
 * - [x] if type="credit" - installment=N - status="expected" - received_date(created_at + (30 * N))
 * - [x] 2,8% type="debit"
 * - [x] 3,2% type="credit" installments="null"
 * - [x] 3.8% type="credit" installments="2 - 6"
 * - [x] 4.2% type="credit" installments="7 - 12"
 */

class TransactionController {
  async store(req, res) {
    const { type_transaction, value, installments } = req.body;
    if (type_transaction === 'debit') {
      req.body.value = Number(value) + 28 / 10;
      req.body.status = 'received';
      req.body.received_date = new Date();
    }

    if (type_transaction === 'credit') {
      req.body.value = Number(value) + 32 / 10;
      req.body.status = 'expected';

      req.body.received_date = addDays(new Date(), 30);
    }
    if (type_transaction === 'credit' && (installments >= 2 && installments <= 6)) {
      req.body.value = Number(value) + 38 / 10;
      req.body.status = 'expected';

      req.body.received_date = addDays(new Date(), 30 * installments);
    }

    if (type_transaction === 'credit' && (installments >= 7 && installments <= 12)) {
      req.body.value = Number(value) + 42 / 10;
      req.body.status = 'expected';
      req.body.received_date = addDays(new Date(), 30 * installments);
    }

    if (installments > 12) {
      return res.status(401).json({ error: 'Insert a valid installment number 2-12' });
    }
    const transaction = await Transaction.create(req.body);
    return res.json(transaction);
  }

  // async index(req, res) {}
}

export default new TransactionController();
