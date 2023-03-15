import React, { useState, useEffect } from 'react';
import axios from 'axios';

// comment out when config not hardcoded
const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'
const api = require('../../../config.js');

const RelatedProducts = (props) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getRelatedProducts = () => {
    let options = {
      'url': '/related',
      'params': {'productID': props.id},
      'method': 'get'
    }

    axios.request(options).then((data) => {
      setRelatedProducts(data.data);
      console.log(relatedProducts);
    });
  };

  const getRelatedProduct = (productID) => {
    let options = {
      'url': '/relatedProduct',
      'params': {productID},
      'method': 'get'
    }
    axios.request(options).then((data) => {
      props.setProduct(data.data);
    });
  };

  useEffect(() => {
    getRelatedProducts();
  }, [])

  console.log(relatedProducts);
  return (
    <div className='related-products'>
      {relatedProducts.map((relatedProductID) => {
        return (
          <div onClick={() => {getRelatedProduct(relatedProductID)}}>
            {relatedProductID}
          </div>
        )
      })}
    </div>
  )
}

export default RelatedProducts;