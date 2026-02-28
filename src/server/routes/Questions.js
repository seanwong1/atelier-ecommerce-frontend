const express = require('express');
const router = express.Router();
const axios = require('axios');
const api = require('../../config.js');

//retrieve list of questions for a product
router.get('/', async (req, res) => {
  const options = {
    'method': 'get',
    'url': api.QUESTIONS,
    'params': {
      'product_id': req.query.product_id,
      'page': 1,
      'count': 100
    },
    'headers': {
      'Authorization': api.TOKEN
    }
  };

  try {
    const questions = await axios.request(options);
    res.send(questions.data.results);
  } catch (err) {
    res.sendStatus(404);
  }
});

//post question
router.post('/add', async (req, res) => {
  const options = {
    'url': api.QUESTIONS,
    'method': 'post',
    'headers': {
      'Authorization': api.TOKEN
    },
    'data': {
      'body': req.body.question,
      'name': req.body.nickname,
      'email': req.body.email,
      'product_id': req.body.product_id
    }
  };

  try {
    await axios.request(options);
    res.send('Working');
  } catch (err) {
    res.status(404).send(err);
  }
});

//increase helpfulness of question
router.put('/helpful', async (req, res) => {
  const options = {
    'url': api.QUESTIONS + `/${req.body.question_id}/helpful`,
    'method': 'put',
    'headers': {
      'Authorization': api.TOKEN
    }
  };

  try {
    await axios.request(options);
    res.status(201).send('working');
  } catch (err) {
    res.sendStatus(404);
  }
});

module.exports = router
