import React from 'react';

const AddQuestion = ({ product_id, onChangeQuestion, onChangeUsername, onChangeEmail, onSubmitQuestion }) => {

  return (
    <div className='QA-AddQuestion'>
      <h1>Ask Your Question</h1>
      <h2>About the PRODUCT_NAME_HERE</h2>
      <form className='QA-AddQuestion-Form' onSubmit={onSubmitQuestion}>
        <textarea className='QA-Question-Text' maxLength='1000'/>
        <input
        className='QA-Question-Username'
        placeholder='Example: jackson11!'
        maxLength='60'>
        </input>
        {/* Might change span to div or p */}
        <span>For privacy reasons, do not use your full name or email address</span>
        <input
        className='QA-Question-Username'
        placeholder='Example: exampleemail@email.com'
        maxLength='60'>
        </input>
        {/* Might change span to div or p */}
        <span>For authentication reasons, you will not be emailed</span>
        <button>Submit Your Question</button>
      </form>
    </div>
  );
}

export default AddQuestion