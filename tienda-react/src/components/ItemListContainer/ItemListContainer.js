import { useState } from 'react' ;
import { useEffect } from 'react';
import {getProducts} from '../../Data/Data';
import ItemList from '../ItemList/ItemList';
import React from 'react';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

 

  useEffect(() => {
    getProducts().then(respuesta => {
      setProductList(respuesta);
    });
  }, []);
  console.log(productList);
  return (

    <div><ItemList productList={productList} /></div>
  );
}

export default ItemListContainer