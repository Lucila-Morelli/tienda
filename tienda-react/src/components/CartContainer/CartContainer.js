import React from 'react';
import {useContext, useState, useEffect} from  'react';
import { cartContext } from '../../context/CartProvider';
import { collection, addDoc, getFirestore, doc,   updateDoc, } from 'firebase/firestore';
import './cartContainer.css';
import moment from 'moment';

const CartContainer = () => {
  const {cart} = useContext(cartContext);

const [total, setTotal] = useState(0);

const [formValues, setFormValues] = useState({
  name: '',
  phone: '',
  email: '',
});

const getTotalPrice = () => {
  setTotal(cart.reduce((acc,product) => acc + product.price * product.quantity ,0 ))
};


const createOrder= () => {
const db = getFirestore();
const query = collection(db, 'order');
const newOrder ={
  buyer:{
    name: formValues.name,
    phone: formValues.phone,
    email: formValues.email,
  },

  date: moment().format('DD/MM/YYYY'),
  item: cart,
  total: total,
};
addDoc(query, newOrder)
.then((response) => {
  alert(`Orden creada con el id ${response.id}`);
  return response
})
.then((res) => {
  cart.forEach((product) => {
    const query = doc(db, 'item', product.id);
    updateDoc(query, {
      stock: product.stock - product.quantity,
    });
  });

})
.catch((error) => console.log(error));
};

useEffect (() => {
  getTotalPrice();
}, [cart])


const handleInputChange = (event) => {
  console.log(event.target.name);
  console.log(event.target.value);
  setFormValues({
    ...formValues,
    [event.target.name]: event.target.value,
  });
};

  return (
    <div>
          {cart.map((product) => (
        <div key={product.id} >
          <img className='imagenC'
            alt={product.title}
            src={`/assets/${product.imagenId}`}
     
          />
          <h2>{product.title}</h2>
          
          <h2>{product.descripcion}</h2>
          <h2>{product.quantity}</h2>

          <h2>Precio: ${product.price}</h2>
        </div>
      ))}
      
   
      <h3>Total: ${total} </h3>
      <button  className='buttonCompra' onClick={createOrder}>Comprar</button>

      <h3>Formulario</h3>
      <div  className='formulario'>
      <input
            name="name"
            type="text"
            placeholder="Nombre"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <input
            name="phone"
            type="text"
            placeholder="Telefono"
            value={formValues.phone}
            onChange={handleInputChange}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={formValues.email}
            onChange={handleInputChange}
          />

      </div>
      
    </div>

  );
};

export default CartContainer