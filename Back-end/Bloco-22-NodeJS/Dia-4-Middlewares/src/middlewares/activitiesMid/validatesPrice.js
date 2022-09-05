const validatesPrice = ({body}, res, next) => {
  const importantKey = 'price';
  const priceValidation = Object.keys(body).includes(importantKey)
  if (!priceValidation) return res.status(400).json({ message: 'O campo price é obrigatório' });
  const { price } = body;
  if (Number(price) < 0) return res.status(400).json({ message: 'O campo price deve ser um número maior ou igual a zero' });
  next()
};

module.exports = validatesPrice;