import React from 'react'
import './shopDesign.css'
import PRODUCTS from '../../productsApi'
import Product from './Product'

const Shop = () => {
  return (
    <div>
      <div className="shopTitle">
        <h1>All Products</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((item)=><Product data={item}/>)}
      </div>
    </div>
  )
}

export default Shop