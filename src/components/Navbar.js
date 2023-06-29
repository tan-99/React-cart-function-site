import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'phosphor-react'
import "./NavbarDesign.css"

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className='links'>
                <Link to="/" className='link'> Shop </Link>
                <Link to="/" className='link'> Logo </Link>
                <Link to="/cart" className='link'> <ShoppingBag size={32} /> </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar