const validatesDates = require('../../helper/validatesDates');

const validatesDescription = ({ body: { description } }, res, next) => {
  if (!description) return res.status(400).json({ message: 'O campo description é obrigatório' });
  if (Object.keys(description).length > 3) return res.status(400).json({ message: 'Campos não reconhecidos na descrição, foram criados' });

  if (!description.createdAt) return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  const isDateValid = validatesDates(description.createdAt);
  if (!isDateValid) return res.status(400).json({ message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" })

  if (!description.rating) return res.status(400).json({ message: 'O campo rating é obrigatório' });
  const isRatingValid = description.rating >= 1 && description.rating <= 5;
  if (!isRatingValid) return res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });

  if (!description.difficulty) return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
  const validDifficulties = [ 'Fácil', 'Médio', 'Difícil' ];
  const isDifficultyValid = validDifficulties.some((x) => x = description.difficulty);
  if (!isDifficultyValid) return res.status(400).json({ message: 'O campo difficulty deve ser "Fácil", "Médio" ou "Difícil"' });
  next();
};

module.exports = validatesDescription;