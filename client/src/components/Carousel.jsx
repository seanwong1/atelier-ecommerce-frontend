import React, { useState, useEffect } from 'react';

import RelatedProduct from './RelatedProduct.jsx';

const Carousel = (props) => {
  const CAROUSEL_LENGTH = 4;

  const [array, setArray] = useState([]);
  const [display, setDisplay] = useState([]);
  const [currentIndex, setCurrentIndex] = useState((CAROUSEL_LENGTH - 1) > props.relatedProductIDs.length ? CAROUSEL_LENGTH - 1 : props.relatedProductIDs.length);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const nextItem = () => {
    if (currentIndex + 1 < array.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousItem = () => {
    if (currentIndex - 1 >= CAROUSEL_LENGTH - 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    setArray(props.relatedProductIDs);
  }, [props]);

  useEffect(() => {
    setDisplay(array.slice(currentIndex - CAROUSEL_LENGTH + 1, currentIndex + 1));
    if (currentIndex >= 0 && currentIndex < CAROUSEL_LENGTH) {
      setShowLeft(false);
      setShowRight(true);
    } else if (currentIndex < array.length && currentIndex >= array.length - CAROUSEL_LENGTH) {
      setShowRight(false);
      setShowLeft(true);
    } else {
      setShowLeft(true);
      setShowRight(true);
    }
    if (array.length < CAROUSEL_LENGTH) {
      setShowLeft(false);
      setShowRight(false);
    }
  }, [currentIndex, array]);

  return (
    <div className='carousel-container' >
      {showLeft ? <button className='carousel-left' onClick={previousItem} >left</button> : null}
      {display.map((relatedProductID) => {
        return (
          <div key={relatedProductID}>
            <RelatedProduct originalProduct={props.originalProduct} relatedProductID={relatedProductID} setProductID={props.setProductID} isOutfit={props.isOutfit ? true : false} removeOutfit={props.removeOutfit} />
          </div>
        )
      })}
      {showRight ? <button className='carousel-right' onClick={nextItem} >right</button> : null}
    </div>
  )
}

export default Carousel;