import React, { useState, useEffect } from 'react';

import Carousel from './Carousel.jsx';
import RelatedProduct from './RelatedProduct.jsx';

const Outfits = (props) => {
  const removeOutfit = (outfitToRemove) => {
    console.log(outfitToRemove)
    var array = [...props.outfits]; // make a separate copy of the array
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === outfitToRemove.id) {
        array.splice(i, 1);
        props.setOutfits(array);
        break;
      }
    }
  }

  return (
    <div>
      <Carousel relatedProductIDs={props.outfits} originalProduct={props.product} >
        {props.outfits.map((outfit) => {
          return (
            <RelatedProduct outfit={outfit} removeOutfit={removeOutfit} />
          )
        })}
      </Carousel>
      <button className='add-to-outfit' onClick={() => {
          if (!props.outfits.some(outfit => outfit.id === props.currentProduct.id)) {
            props.setOutfits([...props.outfits, props.currentProduct]);
          }
        }} >Add to Outfit
      </button>
    </div>
  )
}

export default Outfits;