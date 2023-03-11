import React, { useState, useEffect } from 'react';


const ReviewsOver = ({data}) => {

  return (
    <div className="reviewsOver">
      <div className='averageStars'>
        {/* {Object.keys(data.ratings).forEach(rating => {
          setTotal(total + data.ratings[rating]);
          setAverage(average + Number(rating) * data.ratings[rating]);
        });

        } */}
      </div>
      <div className='percentRecommeneded'>

      </div>
      <div className='reviewsByStar'>

      </div>
      <div className='sizeRating'>

      </div>
      <div className='comfortRating'>

      </div>
      <div className='fitRating'>

      </div>
      <div className='qualityRating'>

      </div>
      <div className='lengthRating'>

      </div>
      <div className='widthRating'>

      </div>
    </div>
  )
}

export default ReviewsOver;