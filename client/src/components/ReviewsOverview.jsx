import React, { useState, useEffect } from 'react';
import ShadedStar from './ShadedStar.jsx';

const ReviewsOver = ({data, total}) => {
  const [average, setAverage] = useState(0);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    setAverage(Object.keys(data.ratings).reduce((acc, rating) => {
      return (acc + Number(rating) * Number(data.ratings[rating]));
    }, 0)/total);
  }, [data.ratings, total]);

  useEffect(() => {
    setStars(((Math.round(average * 4) / 4).toFixed(2)));

  }, [average]);

  return (
    <div>
      {/* {JSON.stringify(data)} */}
      <div className='averageStars'>
        <div>
          {Math.round(average * 100)/100}
        </div>
        <div>
          {'★'.repeat(Math.floor(stars))}
        </div>
        <ShadedStar shade={stars % 1}/>
        <div>
          {'☆'.repeat(5-Math.floor(stars))}
        </div>
      </div>
      <div className='percentRecommended'>
        {Math.floor(Number(data.recommended[true])
          /(Number(data.recommended[true]) + Number(data.recommended[false]))
          * 100) + '% recommended'}
      </div>
      <div className='reviewsByStar'>
        {Object.keys(data.ratings).map((rating) => {
          return (
            <div key={rating}>
              <aside style={{}}>
                {rating + ' stars'}
              </aside>
              <div style={{}}>
              </div>
            </div>
          );
        })}
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