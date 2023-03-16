import React, { useState, useEffect } from 'react';
import axios from 'axios';

// comment out when config not hardcoded
const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'
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

  const getRelatedProduct = (productID) => {
    let options = {
      'url': apiURL + productID,
      'method': 'get',
      'headers': {
        'Authorization': api.TOKEN
      }
    }

    axios.request(options).then((data) => {
      props.setProduct(data.data);
    })
  };

  useEffect(() => {
    getRelatedProducts();
  }, [])

  return (
    <div className='related-products'>
      {relatedProducts.map((relatedProductID) => {
        return (
          <div key={relatedProductID} onClick={() => {getRelatedProduct(relatedProductID)}}>
            {relatedProductID}
          </div>
        )
      })}
    </div>
  )
}

export default RelatedProducts;