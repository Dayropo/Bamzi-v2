import React from "react"
import ProductDetails from "./pages/productDetails"
import SellersBoard from "./pages/sellersBoard"
import SellersStore from "./pages/sellersStore"
import Sellers from "./pages/Sellers"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductDetails />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="sellers-board" element={<SellersBoard />} />
        <Route path="sellers-store" element={<SellersStore />} />
        <Route path="sellers" element={<Sellers />} />
      </Routes>
    </BrowserRouter>
  )
}
