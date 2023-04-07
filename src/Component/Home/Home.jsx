import React, { useState } from 'react';
import { useLoaderData} from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';
import Cart from '../Cart/Cart';

const Home = () => {
     const tShirts = useLoaderData();

      const[cart, setCart]=useState([]);

     const handelAddToCart=(tShirt)=>{
      const newCart = [...cart,tShirt];
      setCart(newCart);
     }
     const handelRemoveCart=(id)=>{
    const remainingTs = cart.filter(ts => ts._id !== id);
    console.log(remainingTs);
    setCart(remainingTs);
     }


      return (
            <div className='grid grid-cols-2 px-10 mx-auto'>
                  <div className='grid grid-cols-3 gap-5'>
                  {
                        tShirts.map(tShirt=> <Tshirts
                        key={tShirt._id}
                        tShirt={tShirt}
                        handelAddToCart={handelAddToCart}
                        ></Tshirts>)
                  }
                  </div>
                  <div>
                        <Cart cart={cart}
                        handelRemoveCart={handelRemoveCart}></Cart>
                  </div>
                  
            </div>
      );
};

export default Home;