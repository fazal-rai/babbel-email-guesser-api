import EmailGuesser from '../services/generateEmail.service.js';

export const guessEmail = async (req, res, next) => {
  try {
    const { fullName, domain } = req.query;
    if (!fullName) {
      return res.status(422).send('Please provide Full name');
    }
    if (!domain) {
      return res.status(422).send('Please provide company Domain name');
    }

    const name = fullName.toLowerCase().split(' ');
    const data = req.app.get('formatData');

    if (name.length !== 2) {
      return res
          .status(422)
          .send('Full name should contain first_name and last_name');
    }

    const emailService = new EmailGuesser(data);
    const [firstName, lastName] = name;
    const result = emailService.perform(firstName, lastName, domain);

    res.send(result);
  } catch (error) {
    next(error);
  }
};
