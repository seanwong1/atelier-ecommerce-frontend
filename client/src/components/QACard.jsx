import React, { useState, useMemo } from 'react';
import Answer from './Answer.jsx';

const QACard = ({ id, question, helpfulness, reported, answers, toggleShowAnswerModal }) => {
  const [seeMore, setSeeMore] = useState(false);

  const answerComponent = Object.values(answers).map((answer) => {
    return (
        <Answer
          key={answer.id}
          id={answer.id}
          body={answer.body}
          name={answer.answerer_name}
          date={answer.date}
          count={answer.helpfulness}
          reported={answer.reported}
        />
      )
  });

  const toggleSeeMore = (e) => {
    setSeeMore(!seeMore);
  };

  return (
    <div className='QACard'>
      QACard id={id}
      <div  className='Question'>Q: {question}</div>
      {/* Add Answer button below */}
      <div className='Question-add' onClick={(e) => toggleShowAnswerModal(e, question, id)}>Add answer</div>
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
