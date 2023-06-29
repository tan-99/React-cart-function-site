import React, { createContext } from 'react'
import { useState } from 'react'
// import PRODUCTS from '../productsApi'

export const shopContext = createContext()

// const getDefaultCart= () => {

//   let cart = {};
//   for(let i=1; i<PRODUCTS.length+1; i++){
//     cart[i] = { prodFreq: 0 };
//   }

//   console.log(cart)
//   return cart;
// }

const ShopContextProvider = (props) => {
    // {/*This will define all the states and functions are project needs. */}
    const [cartItems, setCartItems] = useState([]);

    const addToCart= (itemId) => {
      setCartItems((prevCart) => {
        var newCart = { ...prevCart };
        
        if(newCart[itemId]){
          newCart[itemId] = {...newCart[itemId], prodFreq: newCart[itemId].prodFreq + 1};
        }
        else{
          newCart[itemId] = {
            id: itemId,
            prodFreq: 1
          };
        }

        console.log(newCart)
        return newCart;
      })
    }

    const removeFromCart= (itemId) => {
      setCartItems((prevCart) => {
        var newCart = { ...prevCart };
        
        if(newCart[itemId].prodFreq > 1){
          newCart[itemId] = {...newCart[itemId], prodFreq: newCart[itemId].prodFreq - 1};
        }
        else{
          newCart = newCart.filter((item) => item.id!==itemId)
        }

        return newCart;
      })
    }



    // const removeFromCart= (itemId) => {
    //   setCartItems((prevCart) => {
    //     var newCart = { ...prevCart };
    //     let prodFreq = newCart[itemId].prodFreq;
    //     newCart[itemId] = {...newCart[itemId], prodFreq: prodFreq - 1}
    //     return newCart;
    //   })
    // }

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <shopContext.Provider value={contextValue}>
        {props.children}
    </shopContext.Provider>
  )
}

export default ShopContextProvider