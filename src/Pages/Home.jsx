import React from 'react'
import ProductCard from '../Components/ProductCard';
import Sidebar from '../Components/Sidebar';
import { CartContext } from '../Context/Context';

const Home = () => {
  const { state: {products}, filterState: {sort, byStock, byFastDelivery, byRating, searchQuery} } = CartContext();

  const transformProducts = ()=>{
    let sortedProducts = products;

    if(sort){
      sortedProducts = sortedProducts.sort((a, b)=>
        sort === 'lowToHigh' ? (a.price - b.price) : (b.price - a.price)
      )
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((val) => val.inStock)
    }

    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((val) => val.fastDelivery)
    }

    if(byRating){
       sortedProducts  = sortedProducts.filter(val => val.ratings >= byRating)
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((val)=> val.name.toLowerCase().includes(searchQuery))
    }

    return sortedProducts;
  }

  return (
    <div className='home'>
     
        <div className="home-sidebar">
          <Sidebar />
        </div>

        <div className="home-main">
          {
            transformProducts().map((prod)=> <ProductCard key={prod.id} prod={prod} />)
          }
        </div>
    
    </div>
  )
}

export default Home