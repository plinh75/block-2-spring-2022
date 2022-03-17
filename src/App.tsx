import { useState } from 'react'
import './App.css'
import {Navigate, NavLink, Routes, Route} from 'react-router-dom'
import ShowInfo from './components/ShowInfo'

import type {Product} from './types/product'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import DashboardPage from './pages/DashboardPage'
import AdminLayout from './pages/layouts/AdminLayout'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import ProductManager from './pages/ProductManager'

function App() {
  const [count,setCount] = useState<number>(0)
  const [info, setInfo] = useState<Product>({
    name: 'Ngoc',
    age: 22
  })
  
  return <div className="App">
    <header>
      <ul>
        <li><NavLink to="/">Home page</NavLink></li>
        <li><NavLink to="/product">Product page</NavLink></li>
        <li><NavLink to="/about">About page</NavLink></li>
      </ul>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<WebsiteLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path="product" element={<ProductPage/>} />
        </Route>
        <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<Navigate to="/admin/dashboard" />} />
          <Route path="dashboard" element={<DashboardPage/>} />
          <Route path="product" element={<ProductManager/>} />
        </Route>
      </Routes>
    </main>
  </div>
}

export default App
