import Transaction from '../models/Transaction';

class TransactionController {
  async store(req, res) {
    const {
      id, value, description, type_transaction, installments,
    } = await Transaction.create(
      req.body,
    );

    return res.json({
      id,
      value,
      description,
      type_transaction,
      installments,
    });
  }
}

export default new TransactionController();
