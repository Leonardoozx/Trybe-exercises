const express = require('express');
const validatesDescription = require('../middlewares/activitiesMid/validatesDescription');
const validateName = require('../middlewares/activitiesMid/validatesName');
const validatesThePriceKey = require('../middlewares/activitiesMid/validatesPrice');

const router = express.Router();

router.use(validateName, validatesThePriceKey, validatesDescription);

router.post('/', (_req, res) => res.status(201).json({ message: 'Atividade cadastrada com sucesso!' }))

module.exports = router;