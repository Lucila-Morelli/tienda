import { Link } from 'react-router-dom';

import  './Item.css'

const Item = ({producto}) => {
  
  return (
    <Link to={`/item/${producto.id}`}>
    <div className="data">
    <img className='imagen'
        alt={producto.title}
        src={`/assets/${producto.imagenId}`}
    
      />
       <div className='titulazo'> 
        <h2> {producto.title} </h2>
       
        <h2>Color: {producto.descripcion} </h2>
       
        <h2>Precio: ${producto.price} </h2>


<h2>Stock: {producto.stock} </h2>
</div>
</div>
</Link>
  )
}

export default Item