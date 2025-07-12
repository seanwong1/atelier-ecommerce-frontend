const express = require('express');
const router = express.Router();

require('dotenv').config();

const axios = require('axios');
const multer = require('multer');
const fs = require('fs');
const path = require('path')

const storeImage = require('../lib/storeImage.js');

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../client/dist/images'));
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname;
    cb(null, `${originalName}`);
  }
});

const upload = multer({ storage });

router.get('/reviews', (req, res, next) => {
  let options = {
    'url': process.env.REVIEWSURL,
    'params': req.query,
    'method': 'get',
    'headers': {
      'Authorization': process.env.TOKEN
    }
  };

  axios.request(options).then((data) => {
    res.send(data.data);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(404);
  });
});

router.get('/reviewsMeta', (req, res, next) => {
  let options = {
    'url': process.env.REVIEWSURL + 'meta',
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

router.post('/uploadReviewPic', upload.single('file'), (req, res) => {
  const file = req.file;
  const fileName = file.originalname;

  const filePath = path.join(__dirname, `../client/dist/images/${fileName}`)

  // Redirect to the storeReviewPic route with fileName as a query parameter
  res.redirect(`/storeReviewPic?filePath=${filePath}`);
});

router.get('/storeReviewPic', (req, res) => {
  const filePath = req.query.filePath;

  // Add image to cloudinary process.env
  storeImage(filePath, (file) => {
    res.send('' + file.url);
  });

});

router.post('/addReview', (req, res, next) => {
  let options = {
    'url': process.env.REVIEWSURL,
    'method': 'post',
    'maxBodyLength': Infinity,
    'maxContentLength': Infinity,
    'headers': {
      'Authorization': process.env.TOKEN,
      'Content-Type': 'application/json'
    },
    'data': req.body
  };

  axios.request(options).then((data) => {
    res.sendStatus(202);
  }).catch((err) => {
    res.sendStatus(405);
  });
});

router.put('/reviewsHelpful', (req, res, next) => {
  let options = {
    'url': process.env.REVIEWSURL + req.query['reviewID'] + '/helpful',
    'method': 'put',
    'headers': {
      'Authorization': process.env.TOKEN
    }
  };

  axios.request(options)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

router.put('/reviewsReport', (req, res, next) => {
  let options = {
    'url': process.env.REVIEWSURL + req.query['reviewID'] + '/report',
    'method': 'put',
    'headers': {
      'Authorization': process.env.TOKEN
    }
  };

  axios.request(options)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

router.post('/deleteImages', (req, res, next) => {
  const directory = path.join(__dirname, '../client/dist/images');
  fs.readdir(directory, (err, files) => {
    if (err) {
      res.sendStatus(405);
    };

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) {
          res.sendStatus(405);
        }
      });
    }
  });
  res.sendStatus(202);
});

module.exports = router;