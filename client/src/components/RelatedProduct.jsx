import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';
import getProduct from '../lib/getProduct.js';
import getImages from '../lib/getImages.js';
import getProductReviewMetadata from '../lib/getProductReviewMetadata.js';
import calculateAverage from '../lib/averageCalc.jsx';
import calcTotal from '../lib/totalCalc.jsx';

const RelatedProduct = ({originalProduct, relatedProductID}) => {
  const [relatedProduct, setRelatedProduct] = useState({});
  const [productImages, setProductImages] = useState([{thumbnail_url: 'blah'}]);
  const [modalState, setModalState] = useState(false);
  const [featureSet, setFeatureSet] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);

  const showModal = () => {
    setModalState(true);
  };

  const hideModal = () => {
    setModalState(false);
  };

  // const createFeatureSet = () => {
  //   var newFeatureSet = new Set();
  //   newFeatureSet.add(props.originalProduct.features.map(
  //       (originalProductFeatures) => {
  //         console.log(originalProductFeatures)
  //         return originalProductFeatures['features'];
  //       }))
  //     .add(relatedProduct.features.map(
  //       (relatedProductFeatures) => {
  //         console.log(relatedProductFeatures)
  //         return relatedProductFeatures['features'];
  //       }))
  //   setFeatureSet([...newFeatureSet]);
  // };

  useEffect(() => {
    getProduct(relatedProductID, setRelatedProduct);
    getImages(relatedProductID, setProductImages);
    getProductReviewMetadata(relatedProductID, console.log)
  }, []);

  //console.log(props.originalProduct.features);
  //console.log(relatedProduct.features);

  return (
    <div className='related-product'>
      <button className='related-product-action-button' onClick={() => {showModal()}}>⭐</button>
      <Modal className='related-product-comparison-modal' show={modalState} handleClose={() => {hideModal()}} >
        <div className='related-product-comparison-modal-title'>Comparison</div>
        <table>
          <thead>
            <tr>
              <th>{originalProduct.name}</th>
              <th></th>
              <th>{relatedProduct.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Emil</td>
              <td>Tobias</td>
              <td>Linus</td>
            </tr>
            <tr>
              <td>16</td>
              <td>14</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </Modal>
      <div className='preview-image' onClick={() => {getProduct(relatedProductID)}}><img src={productImages[0].thumbnail_url} alt={relatedProduct.description}></img></div>
      <div className='product-category' >Category: {relatedProduct.category}</div>
      <div className='product-name' >Name: {relatedProduct.name}</div>
      <div className='product-price' >Price: {relatedProduct.default_price}</div>
      <div className='product-rating' >Star Rating: {/* {relatedProduct.} */}</div>
    </div>
  )
}

export default RelatedProduct;