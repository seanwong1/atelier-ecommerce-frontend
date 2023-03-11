import React, { useState, useEffect, useMemo } from 'react';

const QACard = ({ id, question, helpfulness, reported, answers }) => {
  const answer_component = useMemo(() =>
    Object.values(answers).forEach((answer) => {
      return (
        <div className='Answer' key={answer.id}>
          <p>A: {answer.body}</p>
          <span className='Answer-NameDate'>By {answer.name}, {answer.date}</span>
          <span className='Answer-helpful'> Helpful? </span>
          <span> Yes {answer.helpfulness} </span>
          <span className='Answer-report'> Report/Reported </span>
        </div>
      )
    })
  , [answers]);
  console.log(answer_component)

  return (
    <div className='QACard'>
      Yes
      QACard id={id}
      <div  className='Question'>Q: {question}</div>
      <div className='Question-add'>Add answer</div>
      {answer_component}
    </div>
  );
}

export default QACard
