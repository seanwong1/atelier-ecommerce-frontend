import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx'
import ReviewsOverview from './ReviewsOverview.jsx'
import ReviewsNew from './ReviewsNew.jsx'
import axios from 'axios';
import calculateAverage from '../lib/averageCalc.jsx';
import calcTotal from '../lib/totalCalc.jsx';


const Reviews = (props) => {

  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(2);
  const [meta, setMeta] = useState({});
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [sort, setSort] = useState('relevance');

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
      setTotal(calcTotal(result));
    });
  }

  const add2Review = () => {
    //Need to add functionality to stop adding to count and remove the button once count
    // gets to max value which can be obtained in meta data
    setCount(count + 2);
  };

  useEffect(() => {
    if (props.id) {
      getMeta(props.id);
      getReviews({product_id: props.id, count});
    }
  }, [props.id, count]);



  useEffect(() => {
    if (props.id) {
      setAverage(calculateAverage(total, meta));
    }
  }, [total]);


  return (
    <div className="reviews">
      <aside className="reviewsOver">
        {total > 0 ? <ReviewsOverview data={meta} total={total} average={average}/>
        : ''}
      </aside>
      <div className="reviewsList">
        {total + ' reviews, sorted by' + sort}
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