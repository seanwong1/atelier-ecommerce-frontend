import React from 'react';

const AddAnswer = ({ product_name, question_body, onChangeAnswer, onChangeNickname, onChangeEmail,  onSubmitAnswer, onChangePhotos, photos }) => {

  return (
    <div className='QA-Modal'>
      <h1>Submit your Answer</h1>
      <h2>{product_name}: {question_body}</h2>
      <form className='QA-Modal-Form'>
        <h3>Your Answer*</h3>
        <textarea
        className='QA-Modal-Text'
        maxLength='1000'
        onChange={onChangeAnswer}
        />
        <h3>What is your nickname*</h3>
        <input
        className='QA-Modal-Input'
        maxLength='60'
        placeholder='Example: jack543!'
        onChange={onChangeNickname}
        ></input>
        <span>For privacy reasons, do not use your full name or email address</span>
        <h3>Your Email*</h3>
        <input
        className='QA-Modal-Input'
        type='email'
        maxLength='60'
        placeholder='Example: jack@email.com'
        onChange={onChangeEmail}
        ></input>
        <span>For authentication reasons, you will not be emailed</span>
        <img src={photos[0]} alt='Select photos (max 5)'/>
        <input
          className='QA-Modal-Input'
          type='file'
          accept="image/*"
          multiple
          onChange={onChangePhotos}
        ></input>
        <button>Submit Your Answer</button>
      </form>
    </div>
  );
}

export default AddAnswer