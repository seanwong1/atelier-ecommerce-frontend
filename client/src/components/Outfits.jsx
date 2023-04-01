import React, { useState, useEffect } from 'react';

const Outfits = (props) => {
  const [outfits, setOutfits] = useState([]);

  return (
    <Carousel outfitIDs={outfitIDs} originalProduct={props.product} setProduct={props.setProduct} />
    <button className='add-to-outfit' onClick={} >Add to Outfit</button>
  )
}

export default Outfits;