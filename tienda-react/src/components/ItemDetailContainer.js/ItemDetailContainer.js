import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { data } from "../../Data/Data";
import { useEffect, useState } from "react";
const ItemDetailContainer = () => {
    const [productSelected , setProductSelected] = useState({});
    const{id} = useParams();

    const getProducts = (id) => {
      return new Promise ((resolve)=>{
        setTimeout(()=>{
          resolve(data.find((producto) => producto.id === Number(id) ))
        },2000)
      })
    };

    useEffect(() => {
        getProducts(id)
        .then((res)=> setProductSelected(res))
    }, [id]);
    
    return (
    <div>
      {productSelected && <ItemDetail productSelected={productSelected}/>}
    </div>
  )
}

export default ItemDetailContainer