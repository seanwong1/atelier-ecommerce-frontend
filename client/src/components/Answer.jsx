import React, { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns';

const Answer = (props) => {
  const [answer, setAnswer] = useState({});
  const [helpful, setHelpful] = useState(false);

  useEffect(() => {
    setAnswer(props.answer);
  }, [props]);

  const onClickHelpful = (e) => {
    setHelpful(!helpful);
    props.isHelpful(e, answer.id)
  };

  let date = answer.date ? format(parseISO(answer.date), 'MMMM dd, yyyy') : answer.date

  return (
    <div className='Answer' key={answer.id}>
      <p>{answer.body}</p>
      <span className='Answer-NameDate'>By {answer.name}, {date}&ensp;|&ensp;</span>
      {!helpful ?
        <span className='Answer-helpful' onClick={onClickHelpful}> Helpful?&ensp;Yes ({answer.helpfulness})</span> :
        <span className='Answer-helpful'> Helpful?&ensp;Yes ({answer.helpfulness + 1})</span>
      }
      <span className='Answer-report'>&ensp;|&ensp;Report</span>
  </div>
  );
}

export default Answer