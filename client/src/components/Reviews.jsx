import React, { useState, useEffect } from 'react';


const Reviews = (props) => {
  return (
    <div className="reviews">
      Reviews for product: {props.id}
    </div>
  )
}

export default Reviews;