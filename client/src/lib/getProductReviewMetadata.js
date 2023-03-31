import axios from 'axios';

const getProductReviewMetadata = (id, callback) => {
  let options = {
    'url': '/reviewsMeta',
    'params': {'product_id': id},
    'method': 'get'
  }

  axios.request(options)
    .then((result) => {
      callback(result.data);
    })
    .catch(err => {
      console.log('getProductReviewMetadataErr', err);
    });
};

export default getProductReviewMetadata;