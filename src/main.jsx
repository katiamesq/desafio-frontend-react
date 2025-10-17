import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './css/global.css'

import { Product } from './pages/Product'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import CardProducts from './components/CardProducts'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    <Home />
      </StrictMode>,
)

