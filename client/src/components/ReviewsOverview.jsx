import React, { useState, useEffect } from 'react';

const ReviewsOver = ({data, total}) => {
  const [average, setAverage] = useState(0);
  const [stars, setStars] = useState(0);

  const ShadedStarHelper = ({shade}) => {
    const gradients = {
      .25: `linear-gradient(to left, white 60%, black 25%)`,
      .5: `linear-gradient(to right, black 50%, white 50%)`,
      .75: `linear-gradient(to right, black 60%, white 25%)`,
    }

    const gradient = gradients[shade];

    if (shade > 0) {
      return (
        <div>
          <div style={{
            position: 'absolute',
            zIndex: 100,
          }}>
            {'☆'}
          </div>
          <div style={{
            backgroundImage: gradient,
            position: 'absolute',
            zIndex: 100,
            WebkitBackgroundClip: 'text',
            MozBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            MozTextFillColor: 'transparent'
          }}>
            {'★'}
          </div>
          <div style={{
            position: 'absolute',
            zIndex: 100,
          }}>
            {'☆'}
          </div>
        </div>);
    } else {
      return '';
    }
  }

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
        <ShadedStarHelper shade={stars % 1}/>
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