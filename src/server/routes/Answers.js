const express = require('express');
const router = express.Router();
const axios = require('axios');
const api = require('../../config.js');
const sharp = require('sharp');

//post answer
router.post('/add', async (req, res) => {
  const photos = req.body.photos || [];

  try {
    const sharpImages = await Promise.all(
      photos.map(async (image) => {
      let imageBuffer = Buffer.from(image, 'base64');

      const resized = await sharp(imageBuffer)
        .resize(50, 50)
        .jpeg({quality: 1})
        .toBuffer();

        return resized.toString('base64');
      })
    );

    const options = {
      'url': api.QUESTIONS + `/${req.body.question_id}/answers`,
      'method': 'post',
      'headers': {
        'Authorization': api.TOKEN
      },
      'data': {
        'body': req.body.answer,
        'name': req.body.nickname,
        'email': req.body.email,
        'photos': sharpImages
      }
    };

    await axios.request(options);
    res.send('Working');
  } catch (err) {
    res.status(404).send(err);
  }
});

//increase helpfulness of answer
router.put('/helpful', async (req, res) => {
  const options = {
    'url': api.ANSWER + `/${req.body.answer_id}/helpful`,
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

//report an answer
router.put('/report', async (req, res) => {
  const options = {
    'url': api.ANSWER + `/${req.body.answer_id}/report`,
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
