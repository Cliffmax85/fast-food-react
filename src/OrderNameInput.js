import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }
  return <div>
      Who is This Order for? 
    <input onChange={handleChange} />
  </div>;
}
