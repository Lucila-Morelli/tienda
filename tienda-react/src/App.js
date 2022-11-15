import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import State from './components/State/State';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
<>

<ItemListContainer/>
<State/>
<BrowserRouter>
<NavBar/> 
<Routes>
  <Route path='/' element={<ItemListContainer/>}/>
  <Route path="ItemList" element= {ItemList/>} />
  </Routes>
</BrowserRouter>
</>
  );
}

export default App;
