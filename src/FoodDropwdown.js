import React from 'react';

export default function FoodDropwdown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }  
  return <div>
    Select a Main
    <select onChange={handleChange}>
      <option value='1'>Hamburger</option>
      <option value='2'>Chicken Sandwhich</option>
      <option value='3'>Chicken Nuggies</option>
    </select>
  </div>;
}
