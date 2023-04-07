import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';
import Cart from '../Cart/Cart';

const Home = () => {
     const tShirts = useLoaderData();

      return (
            <div className='grid grid-cols-2 px-10'>
                  <div className='grid grid-cols-3 gap-5'>
                  {
                        tShirts.map(tShirt=> <Tshirts
                        key={tShirt._id}
                        tShirt={tShirt}></Tshirts>)
                  }
                  </div>
                  <div>
                        <Cart></Cart>
                  </div>
                  
            </div>
      );
};

export default Home;