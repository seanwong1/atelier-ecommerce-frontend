import React, { useState, useEffect } from 'react';

import Carousel from './Carousel.jsx';

const Outfits = (props) => {
  const [outfits, setOutfits] = useState([]);

  return (
    <div>
      <Carousel>
        {outfits.map((outfit) => {
          <div>hello</div>
        })}
      </Carousel>
      <button className='add-to-outfit' onClick={() => {
        setOutfits([...artists, props.currentProduct]);
        }} >Add to Outfit
      </button>
    </div>
  )
}

export default Outfits;