import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from './store/CartContext'

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900" dir="rtl">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">Anass Shop</Link>
            <nav className="flex items-center gap-4">
              <Link to="/" className="px-3 py-1">الرئيسية</Link>
              <Link to="/cart" className="px-3 py-1 border rounded">عربة التسوق</Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        <footer className="text-center py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Anass Shop — الأسعار بالدرهم المغربي (د.م)
        </footer>
      </div>
    </CartProvider>
  )
}

