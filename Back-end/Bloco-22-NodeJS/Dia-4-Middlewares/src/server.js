const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT;

app.listen(3001, () => console.log(`Server running on port ${PORT}`));