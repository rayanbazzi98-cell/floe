import { HashRouter, Route, Routes } from 'react-router-dom'
import { CartDrawer } from '@/components/CartDrawer'
import { CursorGlow } from '@/components/CursorGlow'
import { Navbar } from '@/components/Navbar'
import { CartProvider } from '@/lib/cart'
import { Checkout } from '@/pages/Checkout'
import { Home } from '@/pages/Home'

function App() {
  return (
    <HashRouter>
      <CartProvider>
        <div className="relative">
          <CursorGlow />
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </HashRouter>
  )
}

export default App
