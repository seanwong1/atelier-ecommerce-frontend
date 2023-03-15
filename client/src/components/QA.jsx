import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import QACard from './QACard.jsx';
import AddQuestion from './AddQuestion.jsx';

const QA = ({ id }) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [nickname, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [showQuestionModal, setShowQuestionModal] = useState(false);
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

  const onSubmitQuestion = (e) => {
    e.preventDefault();
    let body = {
      'body': question,
      'name': username,
      'email': email,
      'product_id': id
    }
  };

  const onSubmitAnswer = (e) => {
    e.preventDefault();
    let body = {
      'body': answer,
      'name': username,
      'email': email,
      'product_id': id
    }
  };

  const onChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const onChangeAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const toggleShowQuestionModal =  (e) => {
    setShowQuestionModal(!showQuestionModal);
  };

  const toggleShowMore = (e) => {
    setShowMore(!showMore);
  };


  return (
    <>
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
        {/* Button to add question if */}
        <button onClick={toggleShowQuestionModal}>Ask a question</button>
        {/* AddQuestion Modal here */}
        {/* Pass product name as proops to AddQuestion */}
        {/* Double check if Addquestion is a Modal/test for it */}
        {showQuestionModal && createPortal(
          <AddQuestion
            product_id={id}
            onChangeQuestion={onChangeQuestion}
            onChangeUsername={onChangeUsername}
            onChangeEmail={onChangeEmail}
            onSubmitQuestion={onSubmitQuestion}
          />
          ,document.body
        )}
      </div>
    </>
  );
}

export default QA