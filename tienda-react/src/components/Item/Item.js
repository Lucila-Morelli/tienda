
import State from '../State/State';
import  './Item.css'

const Item = ({producto}) => {
  const [count , setCount ] = useSate(0);
  return (
    <div className="data">
        <img className='imagen' alt={producto.nombre} src={producto.imagen}/>
       <div className='titulazo'> 
        <h2> {producto.nombre} </h2>
        <h2>Talles disponibles: {producto.talla} </h2>
        <h2>Color: {producto.color} </h2>
        <h2>{producto.precio} </h2>
<State/>
<ItemCount setCount={setCount} />
<button onClick={} >Agregar al carrito</button>
</div>
</div>
  )
}

export default Item