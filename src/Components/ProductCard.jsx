import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai"
import { CartContext } from '../Context/Context';

const ProductCard = ({prod}) => {
  const { state: {cart}, dispatch} = CartContext();
  
  return (
    <div className='pcard'>
      <figure className="pcard-figure">
        <img src={prod.image} alt={prod.name} />
      </figure>
      <div className="pcard-info">
         <h1>{prod.name}</h1>
         <h3>{prod.desc}</h3>
         <h4>INR: {prod.price}</h4>
         <span>
           <h5>Ratings: {prod.ratings}</h5>
           <h5>Fast Delivery: {prod.fastDelivery.toString()}</h5>
         </span>
         
         <h6>In Stock: {prod.inStock}</h6>
      </div>

      <div className="pcard-controls">

           <button className="pcard-add" disabled={prod.inStock === 0} 
              onClick={()=> {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod
                })
              }}
            >
             {
               prod.inStock === 0? "Out Of Stock" : ("Add To Cart")
             }
            </button>
        
          {
            cart.some((p)=> p.id === prod.id) && (
              (<button className="pcard-remove"
                onClick={()=> {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod
                  })
                }}
              >
                Remove From  <span><AiOutlineShoppingCart /></span> 
              </button>))
          }
          
      </div>
    </div>
  )
}

export default ProductCard