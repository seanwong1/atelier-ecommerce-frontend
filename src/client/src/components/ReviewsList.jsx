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
            if (!props.filters.includes(review.rating)) {
              return;
            }
          }
          if (props.keyFilter.length > 2) {
            if (!(review.body.toLowerCase().includes(props.keyFilter) || review.summary.toLowerCase().includes(props.keyFilter))) {
              return;
            }
          }
          return (<ReviewTile review={review} key={review.review_id} addHelpful={props.addHelpful} reportFunc={props.reportFunc} helpfulness={review.helpfulness}/>);
        })}
      </div>

      {props.showMore ?
        <button className='moreReviewsBtn' onClick={addReviews}>
          More Reviews
        </button>
        : <></>}
    </div>
  )
}

export default ReviewsList;
