import React from 'react'

const Answer = ({ id, body, name, date, helpfulness, reported }) => {

  return (
    <div className='Answer' key={id}>
      <p>{body}</p>
      <span className='Answer-NameDate'>By {name}, {date}</span>
      <span className='Answer-helpful'> Helpful? </span>
      <span> Yes {helpfulness} </span>
      <span className='Answer-report'> Report/Reported </span>
  </div>
  );
}

export default Answer