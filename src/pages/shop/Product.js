import React, { useContext } from 'react'
import { shopContext } from '../../context/shop-context'

const Product = ({ data }) => {

    const { id, name, price, image } = data;
    const { addToCart, cartItems } = useContext(shopContext)

    var noOfItems;
    var flag = false;
    if(cartItems[id]!==undefined){
      noOfItems = cartItems[id].prodFreq;
      flag = true;
    }

  return (
    <div className="product" key={id}>
        <div className="img-container">
            <img src={image} className='prod-img'/>
        </div>
        
        <div className="details">
            <p><b>{name}</b></p>
            <p>{price}</p>
        </div>
        <button className='addCartBtn' onClick={() => addToCart(id)}>
          Add To Cart {flag==true && <> ({noOfItems})</>}
        </button>
    </div>
  )
}

export default Product