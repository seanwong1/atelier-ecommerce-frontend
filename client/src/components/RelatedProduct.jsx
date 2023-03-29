import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Modal from './Modal.jsx';
import ShadedStar from './ShadedStar.jsx';

import getHandler from '../lib/getHandler.js';
import createFeatureSet from '../lib/createFeatureSet.js';
import calculateAverage from '../lib/averageCalc.jsx';
import calculateTotal from '../lib/totalCalc.jsx';

const RelatedProduct = (props) => {
  const [relatedProduct, setRelatedProduct] = useState({});
  const [productImages, setProductImages] = useState([{thumbnail_url: 'blah'}]);
  const [modalState, setModalState] = useState(false);
  const [featureSet, setFeatureSet] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [salePrice, setSalePrice] = useState(null);
  const [stars, setStars] = useState(0);
  // const [totalRating, setTotalRating] = useState(0);

  const showModal = () => {
    setModalState(true);
  };

  const hideModal = () => {
    setModalState(false);
  };

  useEffect(() => {
    // setFeatureSet(createFeatureS)
    getHandler('/product', props.relatedProductID, (response) => {
      setRelatedProduct(response.data);
    });
    getHandler('/styles', props.relatedProductID, (response) => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i]['default?']) {
          setProductImages(response.data[i].photos);
          setSalePrice(response.data[i].sale_price);
          break;
        }
      }
    });
    getHandler('reviewsMeta', props.relatedProductID, (response) => {
      setAverageRating(calculateAverage(calculateTotal(response), response.data));
    });
  }, [props.relatedProductID]);

  useEffect(() => {
    setStars(((Math.round(averageRating * 4) / 4).toFixed(2)));
  }, [averageRating]);

  console.log(props.originalProduct.features);

  return (
    <div className='related-product'>
      <button className='related-product-action-button' onClick={() => { showModal(); setFeatureSet(createFeatureSet(props.originalProduct, relatedProduct)); }}>⭐</button>
      <Modal className='related-product-comparison-modal' show={modalState} handleClose={() => { hideModal(); }} >
        <div className='related-product-comparison-modal-title'>Product Comparison</div>
        <table>
          <thead>
            <tr>
              <th>{props.originalProduct.name}</th>
              <th> | features | </th>
              <th>{relatedProduct.name}</th>
            </tr>
          </thead>
          <tbody>
            {[...featureSet].map((feature) => {
              return (
                <tr>
                  <td>{props.originalProduct.features.feature ? props.originalProduct.features[0].value : null}</td>
                  <td>{feature}</td>
                  <td>{relatedProduct.features.feature ? relatedProduct.features[0].value: null}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Modal>
      <div className='preview-image' onClick={() => { props.setProduct(relatedProduct.id); }}><img src={productImages[0].thumbnail_url} alt={relatedProduct.description}></img></div>
      <div className='product-category' >Category: {relatedProduct.category}</div>
      <div className='product-name' >Name: {relatedProduct.name}</div>
      <div className='product-price' >Price: {
        salePrice ? <div><s>relatedProduct.default_price</s><p style="color:red;">salePrice</p></div> : relatedProduct.default_price
        }
      </div>
      <div className='product-rating' >Rating:
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
  )
}

export default RelatedProduct;