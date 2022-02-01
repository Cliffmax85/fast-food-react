import React from 'react';

export default function Food({ foodID, drinkId, sideId }) {
  return <div className='food'>
      <img className='food-image' src={`food-${foodId}.jpeg`} />
      <img className='food-image' src={`food-${drinkId}.jpeg`} />
      <img className='food-image' src={`food-${sideId}.jpeg`} />
  </div>;
}
