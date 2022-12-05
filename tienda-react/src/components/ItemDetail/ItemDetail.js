import './ItemDetail.css';
import { useState, useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({productSelected}) => {

  const [count, setCount] = useState(1);
  const {cart, addToCart} = useContext(cartContext);
  console.log(cart)
  return (
  
    <div className='itemDetail'>
    <img className="img" alt={productSelected.nombre} src={productSelected.imagen} />
    
        <h2>{productSelected.nombre}</h2>
        <h2>{productSelected.talla} </h2>
        <h2>{productSelected.color} </h2>
        <h2>{productSelected.category} </h2>
        <h2>{productSelected.precio} </h2>
        <h2>{count} </h2>
      <ItemCount setCount={setCount} />
 
      <button onClick={() => addToCart(productSelected, count)}>Agregar al carrito</button>
    </div>
  )
}


export default ItemDetail