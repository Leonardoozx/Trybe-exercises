const validateName = ({ body }, res, next) => {
  if (Object.keys(body).length > 3) return res.status(400).json({ message: 'Campos não reconhecidos, foram criados' });
  const importantKey = 'name';
  const nameValidation = Object.keys(body).includes(importantKey)
  if (!nameValidation) return res.status(400).json({ message: 'O campo name é obrigatório' });
  const { name } = body;
  if (name.length <= 4) return res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  next()
};

module.exports = validateName;