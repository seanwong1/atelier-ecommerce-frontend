import axios from 'axios';

const getImages = (id, callback) => {
  let options = {
    'url': '/styles',
    'params': {'productID': id},
    'method': 'get'
  }

  axios.request(options)
    .then((result) => {
      //TODO: make this not hardcoded
      callback(result.data[0].photos);
      //callback(result.data);
    })
    .catch((err) => {
      console.log('getProductErr', err);
    });
};

export default getImages;