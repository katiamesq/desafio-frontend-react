import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/global.css'
import { CardProducts } from './pages/CardProducts'
// import { Product } from './pages/Product'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <CardProducts/>
    {/* <Product /> */}
    <Home />
    <Footer />
  </StrictMode>,
)
