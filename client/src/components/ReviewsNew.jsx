import React, { useState, useEffect } from 'react';

const charText = {
  Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Great', 'Wow!'],
  Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs loose', 'Runs baggy']

}

const ReviewsNew = (props) => {
  return (
    <div className="reviewsNew">
      <div className='rnTitle'>
        Write Your Review
      </div>
      <div className='rnSubtitle'>
        {'About the ' + props.name}
      </div>
      <form className='flexcolumn'>
        <label>
          Overall rating*
          <input>

          </input>
        </label>
        <label>
          Do you recommend this product?*
          <input>

          </input>
        </label>
        {Object.keys(charText).map((char) => {
          return (
            <label key={Math.random()} className='flexcolumn'>
              <div>
                {char}
              </div>
              <div className='flexrow charButtonsRow'>
                {charText[char].map((desc) => {
                  return (
                    <div key={Math.random()} className='flexcolumn'>
                      <input className='charButtons' type="radio"/>
                      <div className='charText'>{desc}</div>
                    </div>
                  )
                })}
              </div>
            </label>
          )
        })}
        <label>
          Review summary
          <input>

          </input>
        </label>
        <label>
          Review body*
          <input>

          </input>
        </label>
        <label>
          Upload your photos
          <input>

          </input>
        </label>
        <label>
          What is your nickname?
          <input>

          </input>
        </label>
        <label>
          Email
          <input>

          </input>
        </label>

        <button type='sumbit'>
          Submit
        </button>

      </form>
    </div>
  )
}

export default ReviewsNew;