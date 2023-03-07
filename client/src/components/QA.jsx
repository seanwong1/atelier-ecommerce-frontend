import React, { useState, useEffect } from 'react';
import QACard from './QACard.jsx';

const QA = ({ id }) => {

  return (
    <div className='QA'>
      Q&A for {id}
      <QACard id={id} />
    </div>
  );
}

export default QA