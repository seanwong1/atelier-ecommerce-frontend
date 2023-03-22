import React, { useState, useEffect } from 'react';
import { format, parseISO } from "date-fns";
import ShadedStar from './ShadedStar.jsx'

const ReviewTile = ({ review, addHelpful, helpfulness }) => {
  const [hov, setHov] = useState(false);
  const [helped, setHelped] = useState(false);
  const [helpful, setHelpful] = useState(helpfulness);

  const changeHelp = () => {
    if (!helped) {
      addHelpful(review.review_id);
      setHelped(true);
      setHelpful(helpful + 1);
    }
  }

  return (
    <div className='reviewTile'>
      <div className='tileTop'>
        <div className='reviewStarRating'>
          <div>
            {'★'.repeat(Math.floor(review.rating))}
          </div>
          <ShadedStar shade={review.rating % 1}/>
          <div>
            {'☆'.repeat(5-Math.floor(review.rating))}
          </div>
        </div>
        <div className='reviewNameDate'>
          {review.reviewer_name ? '☑' + review.reviewer_name + ', ' : 'Cognito, '}
          {format(parseISO(review.date), 'MMMM dd, yyyy')}
        </div>
      </div>
      <h4 className='reviewSummary'>
        {review.summary}
      </h4>
      <div className='reviewRecommended'>
        {review.recommend ? '✓ I recomment this product' : ''}
      </div>
      <p className='reviewBody'>
        {review.body}
      </p>
      <div className='reviewHelpfulness'>
        <div style={{marginRight: '3px'}}>
          Helpful?
        </div>
        <div
          style={hov ? {cursor: 'pointer'} : { textDecoration: 'underline' }}
          className='yesBtn'
          onMouseEnter={() => {if (!helped) {setHov(true)}}}
          onMouseLeave={() => {setHov(false)}}
          onClick={changeHelp}>
          Yes
        </div>
        <div>
          {`(${helpful})`}
        </div>
      </div>
      <div className='reviewResponses'>
        {review.response}
      </div>
      <div className='line'>
      </div>
    </div>
  )
}

export default ReviewTile;