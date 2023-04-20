import './App.css';
import Home from './Components/Comp/Home';
import Navbar from './Components/Comp/Navbar';
import { Route,Routes } from 'react-router-dom';
import Product from './Components/Comp/Product';
import AddToCart from './Components/Comp/AddToCart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/addtocart' element={<AddToCart/>} />
      </Routes>

    </div>
  );
}

export default App;
