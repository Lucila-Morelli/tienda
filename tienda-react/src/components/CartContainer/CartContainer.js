import React from 'react';
import {useContext} from  'react';
import { cartContext } from '../../context/CartProvider';

const CartContainer = () => {
  const {cart} = useContext(cartContext);
  return (
    <div>
        <h1>Los productos de tu carrito:</h1>
        <h2> {producto.title} </h2>
        <h2> {producto.price} </h2>
        
    </div>
  )
}

export default CartContainer