import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RelatedProduct from './RelatedProduct.jsx';

import getHandler from '../lib/getHandler.js';

// comment out when config not hardcoded
// const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'
// const api = require('../../../config.js');

const RelatedProducts = (props) => {
  const [relatedProductsID, setRelatedProductsID] = useState([]);

  useEffect(() => {
    getHandler('/related', 71697, setRelatedProductsID);
  }, [])

  return (
    <div className='related-products'>
      {relatedProductsID.map((relatedProductID) => {
        return (
          <div key={relatedProductID}>
            <RelatedProduct originalProduct={props.product} relatedProductID={relatedProductID} />
          </div>
        )
      })}
    </div>
  )
}

export default RelatedProducts;