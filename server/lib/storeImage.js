const cloudinary = require('cloudinary').v2;

// Configure the cloudinary module with your API credentials
cloudinary.config({
  cloud_name: 'dzadys1ug',
  api_key: '865947289756954',
  api_secret: 'ZcvqX2sI5OoGCPidtmLoRzzHT1w'
});

// Upload an image to cloudinary
const uploadImage = (imageFile) => {
  cloudinary.uploader.upload(imageFile, function(error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  });
};

module.exports = uploadImage;
