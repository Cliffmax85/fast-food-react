import React from 'react';

export default function Food({ foodId, drinkId, sideId }) {
  return <div className='food'>
    <img className='food-image' src={`food-${foodId}.jpeg`} />
    <img className='food-image' src={`drink-${drinkId}.jpeg`} />
    <img className='food-image' src={`side-${sideId}.jpeg`} />
  </div>;
}
