import sequelize from 'sequelize';
import Transaction from '../models/Transaction';

class FinancialController {
  async index(req, res) {
    const { provider_id } = req.body;
    const transactions = await Transaction.findAll({
      where: { provider_id },
      order: ['created_at'],
      attributes: [
        'id',
        'created_at',
        'description',
        'value',
        'type_transaction',
        'installments',
        'status',
        'received_date',
        [sequelize.fn('sum', sequelize.col('value')), 'total'],
      ],
    });
    return res.json(transactions);
  }
}

export default new FinancialController();
