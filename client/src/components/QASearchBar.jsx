import React, { useState, useEffect } from 'react';

const QASearchBar = () => {
const [search, setSearch] = useState('');

useEffect(() => {
  if (search.length >= 3) {
    console.log('time to filter');
  }
}, [search])

const onSearch = (e) => {
  setSearch(e.target.value);
};

  return (
    <div>
    <input
      type='text'
      placeholder='Have a question? Search for answers...'
      value={search}
      onChange={onSearch}
    ></input>
    </div>
  );
}

export default QASearchBar