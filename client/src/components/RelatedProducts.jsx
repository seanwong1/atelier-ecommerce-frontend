import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/'
const api = require('../../../config.js');

const RelatedProducts = (props) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getRelatedProducts = () => {
    let options = {
      'url': api.URL + '/related',
      'method': 'get',
      'headers': {
        'Authorization': api.TOKEN
      }
    }

    axios.request(options).then((data) => {
      setRelatedProducts(data.data);
    })
  };

  useEffect(() => {
    getRelatedProducts();
  }, [])

  return (
    <div className='related-products'>
      {relatedProducts.map((relatedProduct) => {
        return (
          <div onClick={() => {console.log(relatedProduct)}}>
            {relatedProduct}
          </div>
        )
      })}
    </div>
  )
}

export default RelatedProducts;