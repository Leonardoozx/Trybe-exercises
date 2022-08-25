require('express-async-errors');
const express = require('express');
const activitiesRouter = require('./routes/activitiesRouter');
const signupRoutes = require('./routes/signupRoutes');

const app = express();

app.use(express.json());

app.use('/activities', activitiesRouter)

app.use('/signup', signupRoutes)

module.exports = app