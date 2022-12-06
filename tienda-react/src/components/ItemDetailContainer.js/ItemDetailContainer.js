import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import {doc, getDoc, getFirestore} from  'firebase/firestore';
import { useEffect, useState } from "react";
const ItemDetailContainer = () => {
    const [productSelected , setProductSelected] = useState({});
    const{id} = useParams();

    useEffect(() => {
      // creamos la función asíncrona
            const getProducto = async () => {
              const db = getFirestore ();
      // con el método doc, vamos a hacer el filtro
              const queryRef = doc(db, "item", id);
      // recibimos los datos
              const response = await getDoc(queryRef);
      // creamos un nuevo objeto con esos datos
              const newItem = {
                id: response.id,
                ...response.data(),
              };
      // simulando una demora actualizamos el estado
              setTimeout(()=>{
                setProductSelected(newItem);
              }, 2000)
            };
      // llamamos a la función
            getProducto();
          }, [id]);
    
    return (
    <div>
      {productSelected && <ItemDetail productSelected={productSelected}/>}
    </div>
  )
}

export default ItemDetailContainer