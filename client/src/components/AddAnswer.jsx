import React from 'react';

const AddAnswer = ({ product_name, question_body, onChangeAnswer, onChangeUsername, onChangeEmail,  onSubmitAnswer }) => {

  return (
    <div className='QA-AddAnswer'>
      <h1>Submit your Answer</h1>
      <h2>{product_name}: {question_body}</h2>
      <form className='QA-AddAnswerModal'>
        <h3>Your Answer*</h3>
        <textarea
        className='QA-AddAnswer-Text'
        maxLength='1000'
        />
        <h3>What is your nickname</h3>
        <input
        className='QA-Answer-Input'
        maxLength='60'
        placeholder='Example: jack543!'
        ></input>
        <span>For privacy reasons, do not use your full name or email address</span>
        <h3>You Email*</h3>
        <input
        className='QA-Answer-Input'
        maxLength='60'
        placeholder='Example: jack@email.com'
        ></input>
        <span>For authentication reasons, you will not be emailed</span>
        <button></button>
      </form>
    </div>
  );
}

export default AddAnswer