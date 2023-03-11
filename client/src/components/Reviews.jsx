import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx'
import ReviewsOverview from './ReviewsOverview.jsx'
import ReviewsNew from './ReviewsNew.jsx'
import axios from 'axios';


const Reviews = (props) => {

  const [reviews, setReviews] = useState([]);

  const getReviews = (params) => {

    let options = {
      'url': '/reviews',
      'params': params,
      'method': 'get'
    }

    axios.request(options).then((result) => {
      setReviews(result.data);
    })
    .catch(err => {
      console.log('error getting reviews: ', err);
    });

  };

  useEffect(() => {
    if (props.id) {
      getReviews({id: props.id});
    }
  }, [props.id])


  return (
    <div className="reviews">
      {/* {JSON.stringify(reviews)} */}
      <ReviewsOverview />
      <ReviewsList reviews={reviews}/>
      <button>
        Add a Review +
      </button>
    </div>
  )
}

export default Reviews;