import React from 'react';

const Tshirts = ({tShirt, handelAddToCart}) => {
      const {price, picture, name} = tShirt;

      return (
            <div className="card w-[100%] bg-base-100 border-2 border-green-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Price:${price}</p>
    <div className="card-actions">
      <button onClick={()=>handelAddToCart(tShirt)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      );
};

export default Tshirts;
