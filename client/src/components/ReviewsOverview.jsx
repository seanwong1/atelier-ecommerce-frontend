import React, { useState, useEffect } from 'react';
import ShadedStar from './ShadedStar.jsx';
import percentHelper from '../lib/percentHelper.jsx';

<<<<<<< HEAD
=======
const descripts = {
  'Fit': ['Too tight', 'Perfect', 'Too baggy'],
  'Comfort': ['Uncomfortable', 'Ok', 'Perfect'],
  'Size': ['Too small', 'Perfect', 'Too large'],
  'Width': ['Too narrow', 'Perfect', 'Too wide'],
  'Length': ['Too short', 'Perfect', 'Too long'],
  'Quality': ['Poor', 'Perfect']
}

>>>>>>> a6ad12432da0cb5eb90eaa72f950006dba8b1bc1
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
      <div className='ratingDescript'>
        {Object.keys(data.characteristics).map((cName) => {
          return (
            <div key={data.characteristics[cName].id}>
              <div>
                {'' + cName}
              </div>
              {/* <div>
                {'' + data.characteristics[cName].value}
              </div> */}
              <div className='descriptors'>
                {descripts[cName].map((desc) => {

                  if (descripts[cName].length === 2) {
                    return (
                      <div key={Math.random()}>
                        <div className='flexrow'>
                          <div style={{margin: '0 2px 10px 0'}} className='descriptorBox1'>

                          </div>
                          <div className='descriptorBox1'>

                          </div>
                        </div>

                        <div className='descriptorText'>
                          {desc}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={Math.random()}>
                        <div style={{margin: '0 0 10px 0'}}>
                          <div className='descriptorBox'>

                          </div>

                        </div>
                        <div className='descriptorText'>
                          {desc}
                        </div>
                      </div>
                    )
                  }
                })}
                <div className='triangle' style={{left: `${percentHelper(data.characteristics[cName].value, 5)/100*220}px`}}>

                </div>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReviewsOver;