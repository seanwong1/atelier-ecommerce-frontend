import React, { useState, useEffect } from 'react';
import { format, parseISO } from "date-fns";
import ShadedStar from './ShadedStar.jsx'

const ReviewTile = ({review}) => {
  return (
    <div className='reviewTile'>
      <div className='reviewStarRating'>
        <div>
          {'★'.repeat(Math.floor(review.rating))}
        </div>
        <ShadedStar shade={review.rating % 1}/>
        <div>
          {'☆'.repeat(5-Math.floor(review.rating))}
        </div>
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