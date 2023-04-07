import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
      return (
            <nav className='flex justify-between px-96 bg-gray-200 text-xl font-bold py-2'>
                  
                  <Link to="/">Home</Link>
                  <Link to="/orderReview">Order Review</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                  
            </nav>
      );
};

export default Header;