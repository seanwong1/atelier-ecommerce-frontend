const express = require('express');
const router = express.Router();

require('dotenv').config();

const axios = require('axios');

router.get('/cart', (req, res, next) => {
  let options = {
    'url': process.env.CART_URL,
    'method': 'get',
    'headers': {
      'Authorization': process.env.TOKEN
    }
  };

  axios.request(options).then((data) => {
    res.send(data.data);
  }).catch((err) => {
    res.sendStatus(404);
  });
});

router.post('/cart', (req, res, next) => {
  let options = {
    'url': process.env.CART_URL,
    'method': 'post',
    'headers': {
      'Authorization': process.env.TOKEN
    },
    'data': {
      'sku_id': req.query.sku_id
    }
  };

  axios.request(options).then((data) => {
    res.sendStatus(201);
  }).catch((err) => {
    res.sendStatus(404);
  });
});

module.exports = router;