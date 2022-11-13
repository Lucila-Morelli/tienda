import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import State from './components/State/State';
import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';
function App() {
  return (
<>
<NavBar/> 
<ItemListContainer/>
<Item/>
<ItemList/>
<State/>
</>
  );
}

export default App;
