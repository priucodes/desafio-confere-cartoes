import Card from '../models/Card';

/**
 * TODO:
 * - [] Save and return only the last 4 card digits
 * - [] Fix the date format for the expiry
 * - [] Validate the card number size
 * - [] Validate the card cvv size
 * - [] Validade if the user name and the holder name are the same
 */

class CardController {
  async store(req, res) {
    const {
      id, number, expiry, cvv, holder,
    } = await Card.create(req.body);

    return res.json({
      id,
      number,
      expiry,
      cvv,
      holder,
    });
  }
}

export default new CardController();
