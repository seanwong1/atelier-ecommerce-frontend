import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QACard from './QACard.jsx';

const QA = ({ id }) => {
const [questions, setQuestions] = useState([]);

async function fetchQuestions() {
  try {
    let result = await axios.get('/questions');
    console.log(result.data)
    setQuestions(result.data);
  } catch(err) {
    console.log(err);
  }
}

useEffect(() => {
  fetchQuestions();
}, [])

  return (
    <div className='QA'>
      Q&A for {id}
      <QACard id={id} />
    </div>
  );
}

export default QA