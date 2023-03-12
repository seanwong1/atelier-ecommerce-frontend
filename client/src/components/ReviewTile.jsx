import React, { useState, useEffect } from 'react';
import { format, parseISO } from "date-fns";


const ReviewTile = ({review}) => {
  return (
    <div className='reviewTile'>
      <div className='reviewStarRating'>
        {review.rating + ' stars'}
      </div>
      <div className='reviewSummary'>
        {review.summary}
      </div>
      <div className='reviewDate'>
        {format(parseISO(review.date), 'MMMM dd, yyyy')}
      </div>
      <div className='reviewBody'>
        {review.body}
      </div>
      <div className='reviewHelpfulness'>
        {'Helpfulness: ' + review.helpfulness}
      </div>
      <div className='reviewName'>
        {review.reviewer_name}
      </div>
      <div className='reviewRecommended'>
        {'Recommended? ' + review.recommend}
      </div>
      <div className='reviewResponses'>
        {review.response}
      </div>
      ___________________________________________
    </div>
  )
}

export default ReviewTile;