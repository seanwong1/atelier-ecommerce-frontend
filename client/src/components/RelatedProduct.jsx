import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelatedProduct = (props) => {
  const [relatedProduct, setRelatedProduct] = useState({});
  const [productImages, setProductImages] = useState([{thumbnail_url: 'blah'}]);

  const getRelatedProduct = () => {
    let options = {
      'url': '/relatedProduct',
      'params': {'productID': props.relatedProduct},
      'method': 'get'
    }

    axios.request(options)
      .then((data) => {
        setRelatedProduct(data.data);
        getImages(data.data.id);
      });
  };

  const getImages = (productID) => {
    let options = {
      'url': '/styles',
      'params': {productID},
      'method': 'get'
    }

    axios.request(options).then((result) => {
      console.log(result.data[0].photos);
      setProductImages(result.data[0].photos);
    });
  }

  useEffect(() => {
    getRelatedProduct();
  }, []);

  return (
    <div className='related-product'>
      <div className='preview-image' ><img src={productImages[0].thumbnail_url} alt={relatedProduct.description}></img></div>
      <div className='product-category' >Category: {relatedProduct.category}</div>
      <div className='product-name' >Name: {relatedProduct.name}</div>
      <div className='product-price' >Price: {relatedProduct.default_price}</div>
      <div className='product-rating' >Star Rating: {/* {relatedProduct.} */}</div>
    </div>
  )
}

export default RelatedProduct;