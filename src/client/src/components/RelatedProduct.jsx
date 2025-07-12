import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Modal from './Modal.jsx';
import ShadedStar from './ShadedStar.jsx';

import getHandler from '../lib/getHandler.js';
import createFeatureSet from '../lib/createFeatureSet.js';
import calculateAverage from '../lib/averageCalc.jsx';
import calculateTotal from '../lib/totalCalc.jsx';

import image_unavailable from '../img/image_unavailable.png';

const RelatedProduct = (props) => {
  const [relatedProduct, setRelatedProduct] = useState(props.outfit ? props.outfit: {});
  const [productImages, setProductImages] = useState([{thumbnail_url: image_unavailable}]);
  const [modalState, setModalState] = useState(false);
  const [featureSet, setFeatureSet] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [salePrice, setSalePrice] = useState(null);
  const [stars, setStars] = useState(0);
  const [isOutfit, setIsOutfit] = useState(props.isOutfit ? true : false);
  // const [totalRating, setTotalRating] = useState(0);

  const showModal = () => {
    setModalState(true);
  };

  const hideModal = () => {
    setModalState(false);
  };

  useEffect(() => {
    var productID = props.outfit ? props.outfit.id : props.relatedProductID
    getHandler('/product', productID, (response) => {
      setRelatedProduct(response.data);
    });
    getHandler('/styles', productID, (response) => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i]['default?']) {
          setProductImages(response.data[i].photos);
          setSalePrice(response.data[i].sale_price);
          break;
        }
      }
    });
    getHandler('reviewsMeta', productID, (response) => {
      setAverageRating(calculateAverage(calculateTotal(response), response.data));
    });
  }, [props.relatedProductID]);

  useEffect(() => {
    setStars(((Math.round(averageRating * 4) / 4).toFixed(2)));
  }, [averageRating]);

  useEffect(() => {
    setFeatureSet(createFeatureSet(props.originalProduct, relatedProduct));
  }, [relatedProduct]);

  return (
    <div className='related-product' data-testid='related-product' >
      <Modal show={modalState} handleClose={() => { hideModal(); }} >
        <div data-testid="modal" className='related-product-comparison-modal'><h2>Product Comparison</h2></div>
        <table>
          <thead>
            <tr>
              <th>{props.originalProduct ? props.originalProduct.name : null}</th>
              <th> | features | </th>
              <th>{relatedProduct.name ? relatedProduct.name : null}</th>
            </tr>
          </thead>
          <tbody>
            {featureSet.map((featureObj) => {
              return (
                <tr>
                  <td>{featureObj.originalValue ? featureObj.originalValue : null}</td>
                  <td>{featureObj.feature}</td>
                  <td>{featureObj.relatedValue ? featureObj.relatedValue : null}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Modal>
      <div className='related-product-info'>
        <div className='product-name' >
          <b>{relatedProduct.name}</b>
          {isOutfit ?
            <div className='related-product-action-button' onClick={() => { props.removeOutfit(relatedProduct.id); }}>X</div> :
            <div className='related-product-action-button' onClick={() => { showModal(); }}>⭐</div>
          }
        </div>
        <div className='preview-image' onClick={() => { props.setProductID(relatedProduct.id); }}><img src={productImages[0].thumbnail_url ? productImages[0].thumbnail_url : image_unavailable} alt={relatedProduct.description} ></img></div>
        <div className='preview-text'>
          <div className='product-category' >Category: {relatedProduct.category}</div>
          <div className='product-price' >Price: {
            salePrice ? <div><s>relatedProduct.default_price</s><p style="color:red;">salePrice</p></div> : relatedProduct.default_price
            }
          </div>
          <div className='product-rating' data-testid='product-rating' >Rating:
            <div className='averageStars'>
              <div>
                {'★'.repeat(Math.floor(stars))}
              </div>
              <ShadedStar shade={stars % 1}/>
              <div>
                {'☆'.repeat(5-Math.floor(stars))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedProduct;