import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RelatedProduct from './RelatedProduct.jsx';

import getHandler from '../lib/getHandler.js';

const RelatedProducts = (props) => {
  const [relatedProductsID, setRelatedProductsID] = useState([]);

  useEffect(() => {
    if (props.id) {
      getHandler('/related', props.id, setRelatedProductsID);
    }
  }, [props.id]);

  return (
    <div className='related-products'>
      {relatedProductsID.map((relatedProductID) => {
        return (
          <div key={relatedProductID}>
            <RelatedProduct originalProduct={props.product} relatedProductID={relatedProductID} setProduct={props.setProduct} />
          </div>
        )
      })}
    </div>
  )
}

export default RelatedProducts;