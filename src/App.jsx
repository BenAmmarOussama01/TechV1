import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/services';

function App() {


  return (
    <>
    <Navbar /> 
    <Routes>
    <Route path="/*" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/services" element={<Services/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact-us" element={<Contact/>}/>

    </Routes>
    </>
  )
}

export default App
