import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {CartProvider } from './context/CartContext'
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      < CartProvider>
        <div>

          <NavBar />
          
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/checkout' element={ <Checkout /> } />
          </Routes>
        
        </div>
      </ CartProvider >
    </Router>
  );
}

export default App;
