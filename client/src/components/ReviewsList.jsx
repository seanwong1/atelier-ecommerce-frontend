import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = (props) => {
  return (
    <div className="reviewsList">
      {props.reviews.results ?
        (<div>
          {props.reviews.results.map((review) => {
            return (<ReviewTile review={review} key={review.review_id}/>);
          })}
        </div>)
        : ''}
      <button>
        More Reviews
      </button>
    </div>
  )
}

export default ReviewsList;