import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import QACard from './QACard.jsx';
import AddQuestion from './AddQuestion.jsx';
import AddAnswer from './AddAnswer.jsx';

const QA = ({ id, product_name }) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [thumbnail, setThumbnail] = ('');
  const [photos, setPhotos] = useState([]);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect((() => {
    async function fetchQuestions() {
      try {
        let options = {
          'url': '/questions',
          'params': {product_id: 71701}, //place the id prop here,
          'method': 'get'
        }
        let result = await axios.request(options);
        console.log(result.data)
        setQuestions(result.data);
      } catch(err) {
        console.log(err);
      }
    };

    fetchQuestions();
  }), [id]);

  const onSubmitQuestion = async (e) => {
    e.preventDefault();
    let body = {
      'question': questionText,
      'nickname': nickname,
      'email': email,
      'product_id': 71697
    }

    if (questionText === '' || nickname === '' || email === '') {
      let missing = Object.keys(body)
        .filter(field => body[`${field}`] === '')
        .join(', ');
      alert(`You must enter the following: ${missing}`);
      return;
    }

    try {
      await axios.post('/questions/add', body);
      alert(`Thank you for submitting your question: ${body.question}`);
    } catch (err) {
      console.log(err);
      alert('Your question was not submitted due to some internal error. Please try again shortly');
    }
  };


  const onSubmitAnswer = (e) => {
    e.preventDefault();
    let body = {
      'answer': answer,
      'nickname': nickname,
      'email': email,
      'product_id': id,
      'photos': photos
    }
  };

  const onChangeQuestion = (e) => {
    setQuestionText(e.target.value);
  };

  const onChangeAnswer = (e) => {
    setAnswerText(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhotos = async (e) => {
    console.log(e.target.files[0]);
    let photo = await getPhotoPath(e.target.files[0]);
    if (thumbnail === '') {setThumbnail(photo)};
    console.log('PATH', photo);
    setPhotos([...photos, photo]);
  };

  const toggleShowQuestionModal =  (e) => {
    setShowQuestionModal(!showQuestionModal);
  };

  const toggleShowAnswerModal = (e, question) => {
    setShowAnswerModal(!showAnswerModal);
    setQuestion(question);
  };

  const toggleShowMore = (e) => {
    setShowMore(!showMore);
  };

  const getPhotoPath = (file) => {
    let read = FileReader();
    read.readAsDataURL(file);

    return read.result;
  };

  const sortedQuestions = [...questions].sort((a, b) => {
    return a['question_helpfulness'] - b['question_helpfulness'];
  });

  const helpfulQuestions = sortedQuestions.map((question) =>
      <QACard
        key={question.question_id}
        id={question.question_id}
        question={question.question_body}
        // date={question['question_date']}
        // name={question['asker_name']}
        helpfulness={question.question_helpfulness}
        reported={question.reported}
        answers={question.answers}
        toggleShowAnswerModal={toggleShowAnswerModal}
      />
  );

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
            product_name={product_name}
            onChangeQuestion={onChangeQuestion}
            onChangeNickname={onChangeNickname}
            onChangeEmail={onChangeEmail}
            onSubmitQuestion={onSubmitQuestion}
          />
          ,document.body
        )}
        {/* Do I need product_id in Answer Modal */}
        {showAnswerModal && createPortal(
          <AddAnswer
            product_name={product_name}
            question_body={question}
            photos={photos}
            onChangeAnswer={onChangeAnswer}
            onChangeNickname={onChangeNickname}
            onChangeEmail={onChangeEmail}
            onSubmitAnswer={onSubmitAnswer}
            onChangePhotos={onChangePhotos}
         />
         , document.body
        )}
      </div>
    </>
  );
}

export default QA