import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = (props) => {
  const addReviews = () => {
    props.moreFunc();
  }
  return (
    <div>
      <div>
        {props.reviews.results.map((review) => {
          return (<ReviewTile review={review} key={review.review_id}/>);
        })}
      </div>
      <button onClick={addReviews}>
        More Reviews
      </button>
    </div>
  )
}

export default ReviewsList;