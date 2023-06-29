import React, { useContext } from 'react'
import ShopContextProvider, { shopContext } from '../../context/shop-context'

const Product = ({ data }) => {

    const { id, name, price, image } = data;
    const { addToCart } = useContext(shopContext)
  return (
    <div className="product">
        <div className="img-container">
            <img src={image} className='prod-img'/>
        </div>
        
        <div className="details">
            <p><b>{name}</b></p>
            <p>{price}</p>
        </div>
        <button className='addCartBtn' onClick={() => addToCart(id)}>Add To Cart</button>
    </div>
  )
}

export default Product