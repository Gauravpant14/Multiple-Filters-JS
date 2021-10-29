import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import {cars} from './SampleCarResponse.json'
const allCategories = ['all', ...new Set(cars.map((item) => item.vehicle_details.car_size))];

function App() {
  console.log(cars);
  const [menuItems, setMenuItems] = useState(cars);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category.includes('all')) {
      setMenuItems(cars);
      return;
    }
    const newItems = cars.filter((item) => category.includes(item.vehicle_details.car_size));
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Car Dekho </h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
