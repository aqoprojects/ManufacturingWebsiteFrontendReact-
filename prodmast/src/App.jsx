import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
function App() {

  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/services' element={<ServicesPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
