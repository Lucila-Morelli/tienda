import React from 'react'
import './ItemListContainer.css'
const ItemListContainer = (props) => {
    console.log(props)
  return (
    <div className='mensaje-container'>
        <h2 className='mensaje'>{props.name} </h2>
    </div>
  )
}

export default ItemListContainer