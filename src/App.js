import { useState } from 'react';
import './App.css';
import Food from './Food';
import FoodDropwdown from './FoodDropwdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import OrderNameInput from './OrderNameInput';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState('Hungry Customer');

  return (
    <div className="App">
      <Food 
        foodId={foodId}
        drinkId={drinkId}
        sideId={sideId}
      />

      <h1>
        Please Choose Your Meal {orderName}!
      </h1>
      <div>
        <section className='order-name'>
          <OrderNameInput setOrderName={setOrderName} />
        </section>
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
