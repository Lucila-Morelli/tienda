import  './Item.css'
const Item = ({producto}) => {
  return (
    <div className="data">
        <img className='imagen' alt={producto.nombre} src={producto.imagen}/>
       <div className='titulazo'> 
        <h2>Producto: {producto.nombre} </h2>
        <h2>Talles disponibles: {producto.talla} </h2>
        <h2>Color: {producto.color} </h2>
</div>
</div>
  )
}

export default Item