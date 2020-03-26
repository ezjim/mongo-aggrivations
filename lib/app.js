const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/zoos', require('./routes/zoos'));
// app.use('/api/v1/animals', require('./routes/animals'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
