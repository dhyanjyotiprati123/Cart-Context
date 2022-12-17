import React from 'react';
import {BsPlusCircle} from "react-icons/bs";
import {AiOutlineMinusCircle, AiOutlineShoppingCart} from "react-icons/ai";
import { CartContext } from '../Context/Context';

const CartCard = ({prod}) => {
    const {dispatch} = CartContext()
  return (
    <div className='ccard'>
        <figure className="ccard-figure">
            <img src={prod.image} alt={prod.name} />
        </figure>
        <div className="ccard-name">
            <p>{prod.name}</p>
        </div>
        <div className="ccard-info">
            <p>₹{prod.price}</p>
            <span>
                Rating: {prod.ratings}
            </span>
        </div>
        <div className="ccard-controls">
           <button
             onClick={()=> {dispatch({
                type: "CHANGE_QTY",
                payload:{
                    id: prod.id,
                    qty: prod.qty + 1
                }
             })}}
           >
             <BsPlusCircle />
           </button>
           <div>{prod.qty}</div>
           <button
              onClick={()=> {dispatch({
                type: "CHANGE_QTY",
                payload:{
                    id: prod.id,
                    qty: prod.qty - 1
                }
             })}}

             disabled={prod.qty === 1}
           >
             <AiOutlineMinusCircle />
           </button>
        </div>

        <div className="ccard-remove">
           <button
             onClick={()=>{dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod
             })}}
           >
             Remove From <span><AiOutlineShoppingCart /></span>
           </button>  
        </div>
    </div>
  )
}

export default CartCard