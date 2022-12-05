import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import {doc, getDoc, getFirestore} from  'firebase/firestore';
import { useEffect, useState } from "react";
const ItemDetailContainer = () => {
    const [productSelected , setProductSelected] = useState({});
    const{id} = useParams();

    const getProducts = () =>{
      const db = getFirestore ();
      const query = doc (db, 'item', id);
      getDoc(query)
      .then((response)=> {
        console.log(response.data());
        setProductSelected({id: response.id, ...response.data()});
      })
      .catch((error) => console.log(error));

    }

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