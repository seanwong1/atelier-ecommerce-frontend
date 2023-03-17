import React, { useState, useEffect } from 'react';
import ShadedStar from './ShadedStar.jsx';
import percentHelper from '../lib/percentHelper.jsx';

const ReviewsOver = ({data, total, average}) => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    setStars(((Math.round(average * 4) / 4).toFixed(2)));
    console.log('stars2', stars, average);

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
            <div key={rating} style={{display: 'flex', paddingBottom: 10}}>
              <aside style={{flex: '0 0 auto', paddingRight: 5}}>
                {rating + ' stars'}
              </aside>
              <div style={{flex: '1 1 auto', backgroundColor: 'green', height: '15px', width: `${percentHelper(data.ratings[rating], total)}%`}}>

              </div>
              <div style={{flex: '1 1 auto', backgroundColor: 'grey', height: '15px', width: `${percentHelper(data.ratings[rating], total, 1)}%`}}>

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