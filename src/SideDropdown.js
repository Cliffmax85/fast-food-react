import React from 'react';

export default function SideDropdown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }
  return <div>
      Select a Side
    <select onChange={handleChange}>
      <option value='1'>Salad</option>
      <option value='2'>Fries</option>
      <option value='3'>Biscuit</option>
    </select>
  </div>;
}
