import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { CartContext } from './context/CartContext';
import './App.css'

function App() {


  return (
    <div className="App">
      <CartContext>
         <BrowserRouter>
            <Navbar />
         <Routes>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
        </Routes>
    </BrowserRouter>
      </CartContext>
    </div>
  )
}

export default App
