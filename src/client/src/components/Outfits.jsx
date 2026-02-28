import React from 'react';
import Carousel from './Carousel.jsx';

const Outfits = (props) => {
  const removeOutfit = (outfitToRemove) => {
    var array = [...props.outfits]; // make a separate copy of the array
    for (var i = 0; i < array.length; i++) {
      if (array[i] === outfitToRemove || array[i].id === outfitToRemove.id) {
        array.splice(i, 1);
        props.setOutfits(array);
        break;
      }
    }
  }

  return (
    <Carousel relatedProductIDs={props.outfits} originalProduct={props.currentProduct} setProductID={props.setProductID} isOutfit={true} removeOutfit={removeOutfit} />
  )
}

export default Outfits;
