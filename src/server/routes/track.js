const express = require('express');
const router = express.Router();
const axios = require('axios');
const api = require('../../config.js');

router.post('/clickTrack', (req, res) => {
  const options = {
    url: api.INTURL,
    method: 'post',
    headers: {
      Authorization: api.TOKEN,
    },
    data: {
      widget: req.query.widget,
      element: req.query.element,
      time: JSON.stringify(Date.now()),
    },
  };

  axios
    .request(options)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

module.exports = router;
