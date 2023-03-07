import React, { useState, useEffect } from 'react';

const QACard = ({ id }) => {

  return (
    <div className='QACard'>
      QACard id={id}
      <div  className='Question'>Q: Was this question helpful?</div>
      <div className='Question-add'>Add answer</div>
      <div className='Answers'>
          <p className='Answer'>
            A: This is the answer to question number 1.
            If it is helpful, please upvote.
          </p>
          {/* Might not use span element */}
          <span className='Answer-NameDate'>By Wity101, March 6th, 2023</span>
          <span className='Answer-helpful'>Helpful?</span> <span>Yes 15</span> <span className='Answer-report'>Report</span>
      </div>
    </div>
  );
}

export default QACard