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
     
     <h2 className='tituloDetail'>Detalle de tu producto</h2>
     <img
        alt={productSelected.title}
        src={`/assets/${productSelected.imagenId}`}
        width={'300px'}
      />
         <h2>{productSelected.categoryId} </h2>
        <h2>Color disponible: {productSelected.descripcion} </h2>

        <h2>Precio: ${productSelected.price} </h2>

        <h2>Disponible: {productSelected.stock} unidades </h2>
        <h2>Agregaste: {count} </h2>
      <ItemCount setCount={setCount} />
 
      <button className='buttonCount' onClick={() => addToCart(productSelected, count)}>Agregar al carrito</button>
    </div>
  )
}


export default ItemDetail
