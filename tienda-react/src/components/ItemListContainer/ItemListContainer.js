import { useState } from 'react'
import { useEffect } from 'react';
import {data} from '../../Data/Data';
import ItemList from '../ItemList/ItemList';
import React from 'react';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);

    }, 3000);
  });

  useEffect(() => {
    getProducts.then(respuesta => {
      setProductList(respuesta);
    });
    setTimeout(() => {
      console.log(productList);
    } , 4000);
  }, [productList]);
  return (

    <div><ItemList productList={productList} /></div>
  );
}

export default ItemListContainer