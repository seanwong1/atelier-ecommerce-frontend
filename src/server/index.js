const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path')
require('dotenv').config();

const routes = require('./routes');

app.use(compression());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});