import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'

export default function Router() {
  return (
    <BrowserRouter>

   <Header/>
    
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
