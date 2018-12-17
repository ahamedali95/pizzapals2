import React from 'react';
import pizza from '../../assets/images/pizza.png';

const Header = () => {
  return (
    <div>
      <header className='App-header'>
        <img src={pizza} className='App-logo' alt='logo' />
        <h1>Pizza Pals</h1>
      </header>
    </div>
  );
}

export default Header;
