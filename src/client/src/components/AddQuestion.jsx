import React from 'react';

const AddQuestion = ({ product_id, toggleShowQuestionModal, onChangeQuestion, onChangeNickname, onChangeEmail, onSubmitQuestion, product_name }) => {

  return (
    <div className='QA-Modal-Container'>
      <div className='QAModal'>
        <form className='QA-Modal-Form' onSubmit={onSubmitQuestion}>
          <h1>Ask Your Question</h1>
          <h2>About the {product_name}</h2>
          <h3>Your Question*</h3>
          <textarea
            className='QA-Modal-Text'
            maxLength='1000'
            onChange={onChangeQuestion}/>
          <h3>What is your nickname*</h3>
          <input
            className='QA-Modal-Input'
            placeholder='Example: jackson11!'
            maxLength='60'
            onChange={onChangeNickname}
          ></input>
          {/* Might change span to div or p */}
          <span>For privacy reasons, do not use your full name or email address</span>
          <h3>Your email*</h3>
          <input
            className='QA-Modal-Input'
            placeholder='Example: exampleemail@email.com'
            type='email'
            maxLength='60'
            onChange={onChangeEmail}
          ></input>
          {/* Might change span to div or p */}
          <span>For authentication reasons, you will not be emailed</span>
          <button
            className='QA-Modal-Button'
            type='submit'
          >Submit Your Question
          </button>
          <button
            className='QA-Modal-Button'
            onClick={toggleShowQuestionModal}
          >Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddQuestion