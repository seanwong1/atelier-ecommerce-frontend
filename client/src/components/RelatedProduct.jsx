import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Modal from './Modal.jsx';

import getHandler from '../lib/getHandler.js';
import calculateAverage from '../lib/averageCalc.jsx';
import calcTotal from '../lib/totalCalc.jsx';

const RelatedProduct = (props) => {
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
    getHandler('/product', props.relatedProductID, setRelatedProduct);
    getHandler('/styles', props.relatedProductID, (data) => {setProductImages(data[0].photos)});
    getHandler('reviewsMeta', props.relatedProductID, console.log);
  }, [props.relatedProductID]);

  return (
    <div className='related-product'>
      <button className='related-product-action-button' onClick={() => {showModal()}}>⭐</button>
      <Modal className='related-product-comparison-modal' show={modalState} handleClose={() => {hideModal()}} >
        <div className='related-product-comparison-modal-title'>Comparison</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
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
      <div className='preview-image' onClick={() => {props.setProduct(relatedProduct.id)}}><img src={productImages[0].thumbnail_url} alt={relatedProduct.description}></img></div>
      <div className='product-category' >Category: {relatedProduct.category}</div>
      <div className='product-name' >Name: {relatedProduct.name}</div>
      <div className='product-price' >Price: {relatedProduct.default_price}</div>
      <div className='product-rating' >Star Rating: {/* {props.relatedProduct.} */}</div>
    </div>
  )
}

export default RelatedProduct;