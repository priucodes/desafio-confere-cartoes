import Transaction from '../models/Transaction';

/**
 * TODO:
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
  async store(req, res) {}

  async index(req, res) {}
}

export default new TransactionController();
