import React from 'react'
import Rating from './Rating';
import {AiOutlineClear} from "react-icons/ai";
import {CartContext} from "../Context/Context";

const Sidebar = () => {
  
  const {filterState: {byStock, byRating, sort, byFastDelivery}, filterDispatch} = CartContext()
  return (
    <div className='sidebar'>
      <div className="sidebar-title">
        Filter Products
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-item">
          <input type="radio" className="sidebar-input" id='price' onChange={()=> filterDispatch({
            type:"SORT_BY_PRICE",
            payload: "lowToHigh"
          })} checked={sort === "lowToHigh"? true: false} />
          <label htmlFor="price" className="sidebar-label">Price Low To High</label>
        </li>
        <li className="sidebar-item">
          <input type="radio" className="sidebar-input" id='price' onChange={()=> filterDispatch({
             type:"SORT_BY_PRICE",
             payload: "highToLow"
          })} checked={sort === "highToLow"? true: false} />
          <label htmlFor="price" className="sidebar-label">Price High To Low</label>
        </li>
        <li className="sidebar-item">
           <input type="radio" className="sidebar-input" id='instock'
              onChange={()=> filterDispatch({
                type: "FLITER_BY_STOCK"
              })}

              checked={byStock}
            />
          <label htmlFor="instock" className="sidebar-label">In Stock</label>
        </li>
        <li className="sidebar-item">
          <input type="radio" className="sidebar-input" id='fastDelivery'
             onChange={()=> filterDispatch({
               type: "FILTER_BY_DELIVERY"
             })}

             checked={byFastDelivery}
           />
          <label htmlFor="fastDelivery" className="sidebar-label">Fast Delivery</label>
        </li>
      </ul>

      <div className="sidebar-rating">
        <label htmlFor="rating">Ratings</label>
        <Rating rating={byRating} onClick={(i)=> filterDispatch({type: "FILTER_BY_RATING", payload: i+1})} />
      </div>

      <div className="sidebar-control">
        <button className="sidebar-clear"
          onClick={()=> filterDispatch({
            type: "CLEAR_FILTER"
          })}
        >
          Clear Filters
          <span>
            <AiOutlineClear size={24} />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar