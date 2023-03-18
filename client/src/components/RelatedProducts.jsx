import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import getRelatedProducts from '../lib/getRelatedProducts.js';

// comment out when config not hardcoded
// const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'
// const api = require('../../../config.js');

const RelatedProducts = (props) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getRelatedProduct = (productID) => {
    let options = {
      'url': '/product',
      'params': {productID},
      'method': 'get'
    }
    axios.request(options).then((data) => {
      props.setProduct(data.data);
    });
  };

  useEffect(() => {
    getRelatedProducts(props.id, setRelatedProducts);
  }, [])

  return (
    <div className='related-products'>
      {relatedProducts.map((relatedProduct) => {
        return (
          <div key={relatedProduct}>
            <RelatedProduct originalProduct={props.product} relatedProduct={relatedProduct} getRelatedProduct={getRelatedProduct} />
          </div>
        )
      })}
    </div>
  )
}

export default RelatedProducts;