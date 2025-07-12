const express = require('express');
const router = express.Router();

require('dotenv').config();

const axios = require('axios');

router.get('/product', (req, res, next) => {
  let options = {
    'url': req.query ? process.env.URL + req.query['product_id'] : process.env.testURL,
    'params': req.query,
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

router.get('/styles', (req, res, next) => {
  let options = {
    'url': req.query ? process.env.URL + req.query['product_id'] + '/styles' : process.env.testURL + '/styles',
    'params': req.query,
    'method': 'get',
    'headers': {
      'Authorization': process.env.TOKEN
    }
  };

  axios.request(options)
  .then((styleData) => {
    console.log(styleData.data);
    res.send(styleData.data.results);
  })
  .catch((err) => {
    res.sendStatus(400, err)
  });
});

router.get('/related', (req, res, next) => {
  let options = {
    'url': req.query ? process.env.URL + req.query['product_id'] + '/related' : process.env.testURL + '/related',
    'method': 'get',
    'headers': {
      'Authorization': process.env.TOKEN
    }
  }

  axios.request(options).then((data) => {
    res.send(data.data);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(404);
  })
});

module.exports = router;