import React, { useEffect, useState } from 'react'
import CartCard from '../Components/CartCard'
import { CartContext } from '../Context/Context'

const Cart = () => {
  const {state: {cart}} = CartContext();
  const [total, setTotal] = useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc, curr) => acc+Number(curr.price)*curr.qty, 0))
  },[cart]);

  return (
    <div className='cart'>
      <div className="cart-items">
        {
          cart.map((val)=> <CartCard key={val.id} prod={val} />)
        }
      </div>

      <div className="cart-checkout">
         <h1 className="cart-title">
          Subtotal ({cart.length}) Items
         </h1>
         <h2 className='cart-total'>Total: ₹ {total}</h2>
      </div>
    </div>
  )
}

export default Cart