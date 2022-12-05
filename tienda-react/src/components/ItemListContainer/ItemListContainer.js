import { useState } from 'react' ;
import { useEffect } from 'react';
/*
import {getProducts} from '../../Data/Data'*/
import ItemList from '../ItemList/ItemList';
import React from 'react';
import { useParams } from 'react-router-dom';
import {getfirestore, collection , getDocs, query , where} from  'firebase/firestore'

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
const {categoryName} = useParams();
 console.log(categoryName);

const getProducts = () => {
  const db = getfirestore();
  const querySnapshot = collection(db,'items' );
  if(categoryName){
    const queryFilter = query(
      querySnapshot,
      where('categoeyId', '==' , categoryName)
    );
  } else {
    getDocs(querySnapshot).then((response) =>{
      const data = response.docs.map((item) => {
        console.log(item.data());
        return {id: item.id, ...item.data() };
      });
      console.log(response);
      setItems(data);
    })
    .catch((error) => {
      console.log(error);
    })

  }
 
};

useEffect(() =>{
  getProducts();
} ,[categoryName])

/*
 useEffect(() => {
  getProducts(
categoryName
).then(respuesta => {
    setProductList(respuesta);
  });
}, [categoryName]);
*/
  return (

    <div className='lista'><ItemList productList={productList} /></div>
  );
}

export default ItemListContainer