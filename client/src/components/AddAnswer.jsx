import React from 'react';

const AddAnswer = ({ product_name, question_body, onChangeAnswer, onChangeNickname, onChangeEmail,  onSubmitAnswer }) => {

  return (
    <div className='QA-Modal'>
      <h1>Submit your Answer</h1>
      <h2>{product_name}: {question_body}</h2>
      <form className='QA-Form'>
        <h3>Your Answer*</h3>
        <textarea
        className='QA-Textarea'
        maxLength='1000'
        onChange={onChangeAnswer}
        />
        <h3>What is your nickname</h3>
        <input
        className='QA-Input'
        maxLength='60'
        placeholder='Example: jack543!'
        onChange={onChangeNickname}
        ></input>
        <span>For privacy reasons, do not use your full name or email address</span>
        <h3>You Email*</h3>
        <input
        className='QA-Input'
        maxLength='60'
        placeholder='Example: jack@email.com'
        onChange={onChangeEmail}
        ></input>
        <span>For authentication reasons, you will not be emailed</span>
        <button></button>
      </form>
    </div>
  );
}

export default AddAnswer