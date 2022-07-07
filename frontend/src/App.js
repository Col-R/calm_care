import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'

//pages
import Home from './pages/Home';
import Cart from './pages/Cart';


// <Route path="/cart" element={<CartScreen />} /> 

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
