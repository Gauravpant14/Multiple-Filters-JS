import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem,id) => {
        const { vehicle_details} = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={vehicle_details.image_url} alt={id} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{vehicle_details.car_model}</h4>
                <h4 className='price'>{vehicle_details.car_size}</h4>
              </header>
              <p className='item-text'>{vehicle_details.transmission_drive.value}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
