import axios from 'axios';

const getRelatedProducts = (id, callback) => {
  let options = {
    'url': '/related',
    'params': {'productID': id},
    'method': 'get'
  }

  axios.request(options)
    .then((result) => {
      callback(result.data);
    })
    .catch((err) => {
      console.log('getRelatedProductsErr', err);
    });
};

export default getRelatedProducts;