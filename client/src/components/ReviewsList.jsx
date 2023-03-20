import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = (props) => {
  const addReviews = () => {
    props.moreFunc();
  }
  return (
    <div>
      <div>
        {props.reviews.map((review) => {
          if (props.filters.length) {
            console.log(props.filters);
            if (!props.filters.includes(review.rating)) {
              return;
            }
          }
          return (<ReviewTile review={review} key={review.review_id} addHelpful={props.addHelpful} helpfulness={review.helpfulness}/>);
        })}
      </div>
      <button onClick={addReviews}>
        More Reviews
      </button>
      <button>
        Add a Review +
      </button>
    </div>
  )
}

export default ReviewsList;