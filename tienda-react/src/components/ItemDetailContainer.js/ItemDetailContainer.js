import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { data } from "../../Data/Data";
import { useEffect, useState } from "react";
const ItemDetailContainer = () => {
    const [productSelected , setProductSelected] = useState();
    const{id} = useParams();

    const getProducts = () => {
        const productFiltered = data.filter((producto) => {
            return producto.id == id;
        });
        setProductSelected(...productFiltered);
    };

    useEffect(() => {
        getProducts();
    }, [id]);
    
    return (
    <div>
      {productSelected && <ItemDetail productSelected={productSelected}/>}
    </div>
  )
}

export default ItemDetailContainer