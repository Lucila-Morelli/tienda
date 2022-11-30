import React from 'react'

const ItemDetail = ({productSelected}) => {
  return (
    <div>
     
        <h2>{productSelected.nombre}</h2>
        <h2>{productSelected.talla} </h2>
        <h2>{productSelected.color} </h2>
        <h2>{productSelected.category} </h2>
        <h2>{productSelected.precio} </h2>
      
    </div>
  )
}

export default ItemDetail