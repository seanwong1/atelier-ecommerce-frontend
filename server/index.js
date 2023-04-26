const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path')
const axios = require('axios');
require('dotenv').config();
const api = require('../config.js');

var productsRouter = require('./routes/products.js');
const questionsRoute = require('./routes/Questions.js');
const answersRoute = require('./routes/Answers.js');
var reviewsRouter = require('./routes/reviews.js');
var cartRouter = require('./routes/cart.js');

app.use(compression());
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.json());

// Product Routes
app.use('/', productsRouter);

// Questions & Answers Routes
app.use('/questions', questionsRoute);
app.use('/answer', answersRoute);

// Cart Routes
app.use('/', cartRouter);

app.use('/', reviewsRouter);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/clickTrack', (req, res, next) => {
  console.log(req.query);
  let options = {
    'url': api.INTURL,
    'method': 'post',
    'headers': {
      'Authorization': api.TOKEN
    },
    'data': {
      'widget': req.query.widget,
      'element': req.query.element,
      'time': JSON.stringify(Date.now())
    }
  }

  axios.request(options).then((data) => {
    // console.log(data.data);
    res.sendStatus(201);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(404);
  })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});