import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
