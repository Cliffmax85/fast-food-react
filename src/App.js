import { useState } from 'react';
import './App.css';
import Food from './Food';
import FoodDropwdown from './FoodDropwdown';

function App() {
  const [foodId, setFoodId] = useState(1);

  return (
    <div className="App">
      <Food
        foodId={foodId} />
      <h1>
        Please Choose Your Meal add name here
      </h1>
      <div>
        <section className='dropdowns'>
          <FoodDropwdown setFoodId={setFoodId} />
        </section>
      </div>
    </div>
  );
}

export default App;
