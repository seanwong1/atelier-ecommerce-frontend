import React, { useState, useEffect } from 'react';
import { format, parseISO } from "date-fns";
import ShadedStar from './ShadedStar.jsx'

const ReviewTile = ({ review, addHelpful }) => {
  const [hov, setHov] = useState(false);
  const [helped, setHelped] = useState(false);

  const changeHelp = () => {
    if (!helped) {
      addHelpful(review.review_id);
      setHelped(true);
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
          {`(${review.helpfulness})`}
        </div>
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