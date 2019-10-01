import Transaction from '../models/Transaction';

/**
 * TODO:
 * - [] add status to the model as a BOOLEAN
 * - [] Validate the transactions
 * - [] The user can only create a transaction if he has a card associated
 * - [] List all of the transactions
 * - [] if type="debit" - status="received" - received_date (created_at + 0)
 * - [] if type="credit" - installment=null - status="expected" - received_date(created_at + 30)
 * - [] if type="credit" - installment=N - status="expected" - received_date(created_at + (30 * N))
 *
 * No momento de criação dos recebíveis (financials) deve ser descontado a taxa da adquirente (chamada de fee)
 * - [] 2,8% type="debit"
 * - [] 3,2% type="credit" installments="null"
 * - [] 3.8% type="credit" installments="2 - 6"
 * - [] 3.8% type="credit" installments="7 - 12"
 */

class TransactionController {
  async store(req, res) {
    const {
      type_transaction, value, installments, created_at,
    } = req.body;
    if (type_transaction === 'debit') {
      req.body.value = parseInt(value) + 28 / 10;
      req.body.status = 'received';
      // req.body.created_at =

      // CREDIT
    }
    if (type_transaction === 'credit') {
      req.body.value = parseInt(value) + 32 / 10;
      req.body.status = 'expected';
      // req.body.received_date = created_at +

      // CREDIT INSTALLMENT 2 - 6
    }
    if (type_transaction === 'credit' && (installments >= 2 && installments <= 6)) {
      req.body.value = parseInt(value) + 38 / 10;
      req.body.status = 'expected';

      // CREDIT INSTALLMENT 7 - 12
    }
    if (type_transaction === 'credit' && (installments >= 7 && installments <= 12)) {
      req.body.value = parseInt(value) + 42 / 10;
      req.body.status = 'expected';
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
