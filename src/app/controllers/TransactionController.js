import Transaction from '../models/Transaction';

/**
 * - [] Validate the transactions
 * - [] The user can only create a transaction if he has a card associated
 */

class TransactionController {
  async store(req, res) {
    const {
      id,
      value,
      description,
      type_transaction,
      installments
    } = await Transaction.create(req.body);

    return res.json({
      id,
      value,
      description,
      type_transaction,
      installments
    });
  }

  async index(req, res) {
    // where user_id
    // const transactions = await Transaction.findAll({where: {}})
  }
}

export default new TransactionController();
