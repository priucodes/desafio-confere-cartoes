import Card from '../models/Card';

/**
 * TODO:
 * - [x] Save and return only the last 4 card digits
 * - [] Fix the date format for the expiry
 * - [] Validate the card number size
 * - [] Validate the card cvv size
 *
 * OBSERVATIONS:
 * - The card can be used by various users
 */

class CardController {
  async store(req, res) {
    const {
      id, number, expiry, cvv, holder,
    } = await Card.create(req.body);

    // Retuning only the last 4 digits
    const number_digits = number.toString();
    const lastFour = number_digits.substr(number_digits.length - 4);
    return res.json({
      id,
      lastFour,
      expiry,
      cvv,
      holder,
    });
  }
}

export default new CardController();
