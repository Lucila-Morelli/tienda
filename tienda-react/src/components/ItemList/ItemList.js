import Item from '../Item/Item'
const ItemList = ({producList}) => {
  return (
    
    <>
 {producList.map((product) =>(

    <Item key={product.id} producto={product}/>
 ))}
    </>
  )
}

export default ItemList