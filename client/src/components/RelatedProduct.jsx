import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelatedProduct = (props) => {
  const [relatedProduct, setRelatedProduct] = useState({});

  const getRelatedProduct = () => {
    let options = {
      'url': '/relatedProduct',
      'params': {'productID': props.relatedProduct},
      'method': 'get'
    }
    axios.request(options).then((data) => {
      setRelatedProduct(data.data);
    });
  };

  useEffect(() => {
    getRelatedProduct();
  }, [])

  return (
    <div className='related-product'>
      <div className='product-category' >Category: {relatedProduct.category}</div>
      <div className='product-name' >Name: {relatedProduct.name}</div>
      <div className='product-price' >Price: {relatedProduct.default_price}</div>
      <div className='product-rating' >Star Rating: {/* {relatedProduct.} */}</div>
    </div>
  )
}

export default RelatedProduct;