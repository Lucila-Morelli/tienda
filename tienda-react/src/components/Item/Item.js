const Item = ({producto}) => {
  return (
    <div>
        <img alt={producto.nombre} src={`images/${producto.imagen}.png`} />
        <div>
        <h2>Nombre del producto{producto.nombre} </h2>
        <h2>Talla del producto{producto.talla} </h2>
        <h2>Color del producto{producto.color} </h2>

        </div>
       
           

</div>
  )
}

export default Item