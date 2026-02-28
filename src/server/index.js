const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path')
require('dotenv').config();
const isDemoMode = process.env.DEMO_MODE === 'true';
const host = process.env.HOST || '0.0.0.0';

app.use(compression());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use((req, res, next) => {
  const allowedOrigin = process.env.CORS_ORIGIN || '*';

  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

if (!isDemoMode) {
  const routes = require('./routes');
  app.use(routes);
}

const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`)
});
