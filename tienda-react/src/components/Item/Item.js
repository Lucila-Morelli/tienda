
import { Link } from 'react-router-dom';
import State from '../State/State';
import  './Item.css'

const Item = ({producto}) => {
  
  return (
    <Link to={'item/${producto.id} '}>
    <div className="data">
      
        <img className='imagen' alt={producto.nombre} src={producto.imagen}/>
       <div className='titulazo'> 
        <h2> {producto.nombre} </h2>
        <h2>Talles disponibles: {producto.talla} </h2>
        <h2>Color: {producto.color} </h2>
        <h2>{producto.precio} </h2>
        
<State/>

</div>
</div>
</Link>
  )
}

export default Item