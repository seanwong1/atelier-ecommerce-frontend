import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import QACard from './QACard.jsx';

const QA = ({ id }) => {
  const [questions, setQuestions] = useState([{
    "question_id": 37,
    "question_body": "Why is this product cheaper here than other sites?",
    "question_date": "2018-10-18T00:00:00.000Z",
    "asker_name": "williamsmith",
    "question_helpfulness": 4,
    "reported": false,
    "answers": {
      68: {
        "id": 68,
        "body": "We are selling it here without any markup from the middleman!",
        "date": "2018-08-18T00:00:00.000Z",
        "answerer_name": "Seller",
        "helpfulness": 4,
        "photos": []
        // ...
      }
    }
  },
  {
    "question_id": 38,
    "question_body": "How long does it last?",
    "question_date": "2019-06-28T00:00:00.000Z",
    "asker_name": "funnygirl",
    "question_helpfulness": 2,
    "reported": false,
    "answers": {
      70: {
        "id": 70,
        "body": "Some of the seams started splitting the first time I wore it!",
        "date": "2019-11-28T00:00:00.000Z",
        "answerer_name": "sillyguy",
        "helpfulness": 6,
        "photos": [],
      },
      78: {
        "id": 78,
        "body": "9 lives",
        "date": "2019-11-12T00:00:00.000Z",
        "answerer_name": "iluvdogz",
        "helpfulness": 31,
        "photos": [],
      }
    }
  }
]);

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


  useEffect((() => {
    async function fetchQuestions() {
      try {
        let result = await axios.get('/questions');
        setQuestions(result.data);
      } catch(err) {
        console.log(err);
      }
    };

    fetchQuestions();
  }), []);


  return (
    <div className='QA'>
      {/* Q&A for {JSON.stringify(helpfulQuestions)} */}
      {/* Button to add question  */}
      {
      helpfulQuestions.map((question) =>
        <QACard
        key={question.question_id}
        id={question.question_id}
        question={question.question_body}
        // date={question['question_date']}
        // name={question['asker_name']}
        helpfulness={question.question_helpfulness}
        reported={question.reported}
        answers={question.answers}
        />
      )
        }
      {/* Button to expand question list */}
    </div>
  );
}

export default QA