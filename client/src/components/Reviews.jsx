import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx'
import ReviewsOverview from './ReviewsOverview.jsx'
import ReviewsNew from './ReviewsNew.jsx'
import axios from 'axios';


const Reviews = (props) => {

  const [reviews, setReviews] = useState([]);

  const getReviews = () => {

    axios.get(`/reviews?q=${props.id}`).then((result) => {
      setReviews(result.data);
    });

  };

  useEffect(() => {
    if (props.id) {
      getReviews();
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