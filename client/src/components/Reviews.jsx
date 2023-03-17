import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx'
import ReviewsOverview from './ReviewsOverview.jsx'
import ReviewsNew from './ReviewsNew.jsx'
import axios from 'axios';


const Reviews = (props) => {

  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(2);
  const [meta, setMeta] = useState({});
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

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

  const getMeta = () => {
    axios.get(`/reviewsMeta/?product_id=${props.id}`).then((result) => {
      setMeta(result.data);
      setTotal(Object.keys(result.data.ratings).reduce((acc, rating) => {
        return acc + Number(result.data.ratings[rating]);
      }, 0));
    });
  }

  const add2Review = () => {
    //Need to add functionality to stop adding to count and remove the button once count
    // gets to max value which can be obtained in meta data
    setCount(count + 2);
  };

  useEffect(() => {
    if (props.id) {
      console.log('---------------------')
      getMeta();
      getReviews({product_id: props.id, count});
    }
  }, [props.id, count]);

  useEffect(() => {
    if (props.id) {
      setAverage(Object.keys(meta.ratings).reduce((acc, rating) => {
        return (acc + Number(rating) * Number(meta.ratings[rating]));
      }, 0)/total);
    }
  }, [total]);


  return (
    <div className="reviews">
      <aside className="reviewsOver">
        {total > 0 ? <ReviewsOverview data={meta} total={total} average={average}/>
        : ''}
      </aside>
      <div className="reviewsList">
        {total + ' reviews'}
        {reviews.results ? <ReviewsList reviews={reviews} moreFunc={add2Review}/>
        : ''}
      </div>
      <button>
        Add a Review +
      </button>
    </div>
  )
}

export default Reviews;