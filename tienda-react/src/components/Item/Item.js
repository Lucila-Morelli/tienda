import { Link } from 'react-router-dom';

import  './Item.css'

const Item = ({producto}) => {
  
  return (
    <Link to={`/item/${producto.id}`}>
    <div className="data">
      
        <img className='imagen' alt={producto.nombre} src={producto.imagen}/>
       <div className='titulazo'> 
        <h2> {producto.title} </h2>
       
        <h2>Color: {producto.descripcion} </h2>
        <h2>{producto.categoryId} </h2>
        <h2>{producto.price} </h2>

</div>
</div>
</Link>
  )
}

export default Item