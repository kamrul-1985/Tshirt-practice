import React from 'react';

const Cart = ({cart,handelRemoveCart}) => {
      return (
            <div className='fixed top-25 right-20'>
                  <h1 className='text-3xl font-bold'>Cart summary:{cart.length}</h1>
                  <div className='text-xl font-bold'>
                  {
                  cart.map(ts => <p key={ts._id}>{ts.index+1}: Name:{ts.name}
                   <button onClick={()=>handelRemoveCart(ts._id)} className='btn btn-circle bg-gray-500'>X</button>
                  </p>)
                  }
                  </div>
                 
            </div>
      );
};

export default Cart;