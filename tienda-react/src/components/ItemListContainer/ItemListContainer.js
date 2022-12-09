import { useState } from 'react' ;
import { useEffect } from 'react';
import './ItemListContainer.css';
/*
import {getProducts} from '../../Data/Data'*/
import ItemList from '../ItemList/ItemList';
import React from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, collection , getDocs, query , where} from  'firebase/firestore';


const ItemListContainer = () => {
  const [item, setItems] = useState([]);
const {categoryName} = useParams();
 console.log(categoryName);

const getProducts = () => {
  const db = getFirestore();
  const querySnapshot = collection(db,'item' );
  if(categoryName){
    const queryFilter = query(
      querySnapshot,
      where('categoryId', '==' , categoryName)
    );
    getDocs(queryFilter)
    .then((response) =>{
      const data = response.docs.map((item)=>{
      return {id: item.id , ...item.data()};
    }) ;
    console.log(data);
   setItems(data);
    }) 
  
  .catch((error) => {
    console.log(error);
    });
  
  } else {
    getDocs(querySnapshot)
        .then((response) => {
            const data = response.docs.map((item) => {
                console.log(item.data());
                return { id: item.id, ...item.data() };
            });
            console.log(response);
            setItems(data);
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

    <div className='lista'><ItemList productList={item} /></div>
  );
}

export default ItemListContainer