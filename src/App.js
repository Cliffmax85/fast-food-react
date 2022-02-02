import { useState } from 'react';
import './App.css';
import Food from './Food';
import FoodDropwdown from './FoodDropwdown';
import DrinkDropdown from './DrinkDropdown';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);

  return (
    <div className="App">
      <Food 
        foodId={foodId}
        drinkId={drinkId} />

      <h1>
        Please Choose Your Meal add name here
      </h1>
      <div>
        <section className='dropdowns'>
          <FoodDropwdown setFoodId={setFoodId} />
          <DrinkDropdown setDrinkId={setDrinkId} />
        </section>
      </div>
    </div>
  );
}

export default App;
