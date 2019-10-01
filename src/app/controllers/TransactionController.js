import { addDays } from 'date-fns';
import Transaction from '../models/Transaction';

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

  // LISTING ALL TRANSACTIONS CREATED BY AN USER
  async index(req, res) {
    const { user_id } = req.body;
    const transactions = await Transaction.findAll({
      where: { user_id },
      order: ['created_at'],
      attributes: ['id', 'created_at', 'description', 'value', 'type_transaction', 'installments'],
    });
    return res.json(transactions);
  }
}

export default new TransactionController();
