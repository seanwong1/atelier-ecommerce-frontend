import React, { useState, useMemo } from 'react';
import Answer from './Answer.jsx';

const QACard = ({ id, question, helpfulness, reported, answers }) => {
  const [seeMore, setSeeMore] = useState(false);

  const answerComponent = useMemo(() =>
    Object.values(answers).map((answer) => {
      return (
        <Answer
          key={answer.id}
          id={answer.id}
          body={answer.body}
          name={name.name}
          date={answer.date}
          count={answer.helpfulness}
          reported={answer.reported}
        />
      )
    }), [answers]);

  const toggleSeeMore = (e) => {
    setSeeMore(!seeMore);
  };

  return (
    <div className='QACard'>
      Yes
      QACard id={id}
      <div  className='Question'>Q: {question}</div>
      <div className='Question-add'>Add answer</div>
      A:
      {!seeMore ? answerComponent[0] : answerComponent}
      {!seeMore && answerComponent[1]}
      {!seeMore && answerComponent.length > 2
      && <div className='QA-more' onClick={toggleSeeMore}>See more answers</div>}
      {seeMore && <div className='QA-more' onClick={toggleSeeMore}>Collapse answers</div>}

    </div>
  );
}

export default QACard
