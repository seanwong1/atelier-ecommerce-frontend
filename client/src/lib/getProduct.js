import axios from 'axios';

const getProduct = (id, callback) => {
  let options = {
    'url': '/product',
    'params': {'productID': id},
    'method': 'get'
  }

  axios.request(options)
    .then((result) => {
      callback(result.data);
    })
    .catch((err) => {
      console.log('getProductErr', err);
    });
};

export default getProduct;