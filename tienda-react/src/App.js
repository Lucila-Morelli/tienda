import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
<>

<BrowserRouter>
<NavBar/> 
<Routes>
  <Route path='/:filtrado' element={<ItemListContainer/>}/>
  <Route path="ItemList" element= {<ItemList/>} />
  <Route path="cartWidget" element= {<CartWidget/>} />
  
  </Routes>
</BrowserRouter>
</>
  );
}

export default App;
