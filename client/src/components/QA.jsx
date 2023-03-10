import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import QACard from './QACard.jsx';

const QA = ({ id }) => {
const [questions, setQuestions] = useState([]);
const sortQuestions = (arrayToSort) => {
  let copy = [...arrayToSort];
  copy.sort((a, b) => {
    return a['question_helpfulness'] - b['question_helpfulness']
  });

  return copy
};

const helpfulQuestions = useMemo(() => {
  return sortQuestions(questions);
}, [questions]);

async function fetchQuestions() {
  try {
    let result = await axios.get('/questions');
    setQuestions(result.data);
  } catch(err) {
    console.log(err);
  }
};

useEffect(() => {
  fetchQuestions();
}, []);



  return (
    <div className='QA'>
      Q&A for {JSON.stringify(helpfulQuestions)}
      <QACard id={id} />
    </div>
  );
}

export default QA