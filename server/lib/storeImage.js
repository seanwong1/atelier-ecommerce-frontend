const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dzadys1ug',
  api_key: '865947289756954',
  api_secret: 'ZcvqX2sI5OoGCPidtmLoRzzHT1w'
});

const uploadImage = (imageFile, cb) => {
  cloudinary.uploader.upload(imageFile, function(error, result) {
    if (error) {
      console.error(error);
    } else {
      cb(result);
    }
  });
};

module.exports = uploadImage;
