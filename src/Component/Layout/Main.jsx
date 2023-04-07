import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
      return (
            <div className='text-center'>
                  <Header></Header>
                  <h1 className='text-3xl py-5'>this is main component</h1>
                  <Outlet></Outlet>
            </div>
      );
};

export default Main;