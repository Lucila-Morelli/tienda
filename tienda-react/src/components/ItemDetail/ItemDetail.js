import React from 'react'

const ItemDetail = ({productSelected}) => {
  return (
    <div>
        <h2>{productSelected.id}</h2>
        <h2>{productSelected.category} </h2>
        <h2>{productSelected.nombre} </h2>
    </div>
  )
}

export default ItemDetail