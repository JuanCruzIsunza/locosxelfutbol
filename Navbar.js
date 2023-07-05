
import React from 'react';
import CartWidget from './CartWidget';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header>
        <h1>Tienda de Camisetas de Fútbol</h1>
      </header>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Camisetas</a>
        <a href="#">Contacto</a>
        <CartWidget />
        <ul>
        <li>
          <Link to="/">Brand</Link>
        </li>
        <li>
          <Link to="/item/id">Item</Link>
        </li>
        <li>
          <Link to="/category/categoryid">Category</Link>
        </li>
      </ul>
      </nav>
    </div>
  );
};





