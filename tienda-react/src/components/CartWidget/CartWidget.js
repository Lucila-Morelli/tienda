import React from 'react'
import logo from '../../assests/download.png'
import  './CartWidget.css'
const CartWidget = () => {
  return (
    <div className='logo-navbar'>
        <img className='logo-imagen' src={logo} alt="cart widget"/>
    </div>
  )
}

export default CartWidget