import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import {cartContext} from './context/CartProvider'


function App() {
  return (
<>
<cartContext.Provider value={{carrito: []}}>
<BrowserRouter>
<NavBar/> 
<Routes>
  <Route path='/' element={<ItemListContainer/>}/>
  <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
  <Route path="ItemList" element= {<ItemList/>} />
  <Route path="cartWidget" element= {<CartWidget/>} />
  
  </Routes>
</BrowserRouter>
</cartContext.Provider>

</>
  );
}

export default App;
