import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter , Routes , Route } from 'react-router-dom';

import CartProvider from './context/CartProvider'
import ItemDetailContainer from './components/ItemDetailContainer.js/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';


function App() {
  return (
<>
<CartProvider>
<BrowserRouter>
<NavBar/> 
<Routes>
  <Route path='/' element={<ItemListContainer/>}/>
  <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
  <Route path='/item/:id' element={<ItemDetailContainer/>}/>
  <Route path='/cart' element={<CartContainer/>}/>
  </Routes>
</BrowserRouter>
</CartProvider>

</>
  );
}

export default App;