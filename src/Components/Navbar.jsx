import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {TiArrowSortedDown} from "react-icons/ti"
import { CartContext } from '../Context/Context';

const Navbar = () => {
  const {state: {cart}, filterDispatch} = CartContext();

  return (
    <div className='navbar'>
        <div className="navbar-container">
            <div className="navbar-logo">
                <Link className='link' to="/">Shopping Cart</Link>
            </div>

            <div className="navbar-search">
                <input type="text" placeholder='search items'
                  onChange={(e)=> filterDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value
                  })}
                />
            </div>

            <div className="navbar-cart">
                <Link to={"/cart"} className="link navbar-link">
                  <AiOutlineShoppingCart size={30} />
                </Link>
                <div className="navbar-notification">{cart.length}</div>
                <TiArrowSortedDown size={24} />
            </div>
        </div>
    </div>
  )
}

export default Navbar