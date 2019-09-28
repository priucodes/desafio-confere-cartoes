import { format } from 'date-fns';
import * as Yup from 'yup';
import Card from '../models/Card';

/**
 * TODO:
 * - [x] Save and return only the last 4 card digits
 * - [x] Fix the date format for the expiry
 * - [] Validate the minimum card cvv size
 * - [] Validate the minimum card number size
 *
 * OBSERVATIONS:
 * - The card can be used by various users
 * - For now, it's needed to insert the full date - fix later
 */

class CardController {
  async store(req, res) {
    const schema = Yup.object().shape({
      number: Yup.number()
        .required()
        .positive(),
      expiry: Yup.date().required(),
      cvv: Yup.number()
        .required()
        .positive()
        .integer(),
      holder: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails! Check the card information again.' });
    }

    const {
      id, number, expiry, cvv, holder,
    } = await Card.create(req.body);

    // Retuning only the last 4 digits
    const number_digits = number.toString();
    const lastFour = number_digits.substr(number_digits.length - 4);
    const formatted_expiry = format(expiry, 'yy-MM');

    return res.json({
      id,
      lastFour,
      formatted_expiry,
      cvv,
      holder,
    });
  }
}

export default new CardController();
