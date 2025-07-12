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
    <Carousel relatedProductIDs={props.outfits} originalProduct={props.product} isOutfit={true} removeOutfit={removeOutfit} />
  )
}

export default Outfits;