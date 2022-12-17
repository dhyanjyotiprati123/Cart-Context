import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99)

 export const AppContext = ({children}) => {
   const products = [...Array(40)].map(()=> ({
     id: faker.datatype.uuid(),
     name: faker.commerce.productName(),
     desc: faker.commerce.productDescription(),
     price: faker.commerce.price(),
     image: faker.image.image(),
     inStock: faker.random.numeric(1),
     fastDelivery: faker.datatype.boolean(),
     ratings: faker.random.numeric()
   }))
 
   const [state, dispatch] = useReducer(cartReducer, {
     products: products,
     cart: []
   })

   const [filterState, filterDispatch] = useReducer(productReducer, {
     byStock: false,
     byFastDelivery: false,
     byRating:0,
     searchQuery: ""
   })

  return <Cart.Provider value={{state, dispatch, filterState, filterDispatch}}>
    {children}
  </Cart.Provider>
};

export const CartContext =()=> useContext(Cart)