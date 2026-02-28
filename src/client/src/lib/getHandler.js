import axios from 'axios';

const getHandler = async (url, id, callback) => {
  if (id === undefined || id === null) {
    return;
  }

  let options = {
    'url': url,
    'params': {'product_id': id},
    'method': 'get'
  }

  try {
    const response = await axios.request(options);
    callback(response);
  } catch (err) {}
};

export default getHandler;
