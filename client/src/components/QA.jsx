import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import QACard from './QACard.jsx';

const QA = ({ id }) => {
  const [questions, setQuestions] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const sortQuestions = (arrayToSort) => {
    let copy = [...arrayToSort];
    copy.sort((a, b) => {
      return a['question_helpfulness'] - b['question_helpfulness']
    });

    return copy
  };

  const helpfulQuestions = useMemo(() => {
    return sortQuestions(questions).map((question) =>
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

  const toggleShowMore = (e) => {
    setShowMore(!showMore);
  };


  return (
    <>
      {/* Button to add question if */}
      <div className='QA'>
        {/* Q&A for {JSON.stringify(helpfulQuestions)} */}
        {/* {helpfulQuestions} */}
        {!showMore ? helpfulQuestions[0] : helpfulQuestions}
        {!showMore && helpfulQuestions[1]}
        {
        showMore && helpfulQuestions.length > 2
        && <button className='QA-ShowMore' onClick={toggleShowMore}>Less Answered Questions</button>
        }
        {
        !showMore && helpfulQuestions.length > 2
        && <button className='QA-ShowMore' onClick={toggleShowMore}>More Answered Questions</button>
        }
      </div>
    </>
  );
}

export default QA