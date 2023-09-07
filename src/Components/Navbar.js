import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const data=useSelector((state)=>state.cards)
  console.log(data)

  return (
    <nav className='navbar max-width'>
        <span className='logo'>Reduc Store</span>
        <div className='menu-item'>
            <Link className='navlink' to="/">Home</Link>
            <Link className='navlink' to="/cart">Cart</Link>
            <span className='cart-number'> 
             cart item: {data.length}   
            </span>
       </div>
    </nav>
  )
}

export default Navbar