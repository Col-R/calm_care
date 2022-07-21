import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing'


//pages

import Home from './pages/Home';
import Service from './pages/Service'


// <Route path="/cart" element={<CartScreen />} /> 

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/services" element={<Home/>} />
            <Route path="/service/:id" element={<Service/>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
