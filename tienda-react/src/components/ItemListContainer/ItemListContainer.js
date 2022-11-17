import { useState } from 'react' ;
import { useEffect } from 'react';
import {getProducts} from '../../Data/Data';
import ItemList from '../ItemList/ItemList';
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
const {categoryName} = useParams();
 console.log(categoryName);

 useEffect(() => {
  getProducts(
categoryName
).then(respuesta => {
    setProductList(respuesta);
  });
}, [categoryName]);
  return (

    <div><ItemList productList={productList} /></div>
  );
}

export default ItemListContainer