import { useState } from 'react';
import './App.css';
import Food from './Food';
import FoodDropwdown from './FoodDropwdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);

  return (
    <div className="App">
      <Food 
        foodId={foodId}
        drinkId={drinkId}
        sideId={sideId}
      />

      <h1>
        Please Choose Your Meal add name here
      </h1>
      <div>
        <section className='dropdowns'>
          <FoodDropwdown setFoodId={setFoodId} />
          <DrinkDropdown setDrinkId={setDrinkId} />
          <SideDropdown setSideId={setSideId} />
        </section>
      </div>
    </div>
  );
}

export default App;
